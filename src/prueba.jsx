import { useContext, useState } from "react"
import { AuthContext } from "../../context/auth.context"
import MyHouses from "../../components/MyHouses/MyHouses"
import { Container, Row, Col, Button, Modal } from "react-bootstrap"
import MyFollowedVillages from "../../components/MyFollowedVillages/MyFollowedVillages"
import { useEffect } from "react"
import userService from "../../services/user.service"
import ResultsHouses from "../../components/ResultsHouses/ResultsHouses"
import MyRentings from "../../components/MyRentings/MyRentings"
import subscriptionsService from "../../services/subscriptions.service"
import UserImageForm from "../../components/UserImageForm/UserImageForm"
import UserEditForm from "../../components/UserEditForm/UserEditForm"
import './UserProfilePage.css'
import NewHouseForm from "../../components/NewHouseForm/NewHouseForm"
import housesService from "../../services/houses.service"
import MyNextBookings from "../../components/MyNextBookings/MyNextBookings"

const UserProfilePage = () => {

    const { user } = useContext(AuthContext)

    const [userDetails, setUserDetails] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)

    const [subscriptions, setSubscriptions] = useState([])
    // const [subsLoaded, setSubsLoaded] = useState(false)
    const [myHouses, setMyHouses] = useState([])

    const [showImageModal, setShowImageModal] = useState(false)
    const [showUserModal, setShowUserModal] = useState(false)
    const [showNewHouseModal, setShowNewHouseModal] = useState(false)


    useEffect(() => {
        if (user) {
            getDetails()
            getSubscriptions()
            getMyHouses()
        }
    }, [user])


    const getDetails = () => {

        userService
            .getUserDetails()
            .then(({ data }) => {
                setUserDetails(data)
                setIsLoaded(true)
            })
            .catch(err => console.log(err))
    }



    const getSubscriptions = () => {
        subscriptionsService
            .getAllSubscriptionsOfOneUser()
            .then(({ data }) => {
                const subsArr = data.map(elm => elm.house)

                return subsArr
            })
            .then(subsArr => {
                setSubscriptions(subsArr)
                // setSubsLoaded(true)
            })

            .catch(err => console.log(err))
    }

    const getMyHouses = () => {
        userService
            .getAllPropertiesOfOneUser()
            .then(({ data }) => {
                setMyHouses(data)
            })
            .catch(err => console.log(err))
    }

    const handleEditImgBtn = () => setShowImageModal(true)
    const handleSaveImageBtn = () => setShowImageModal(false)

    const handleEditUserBtn = () => setShowUserModal(true)
    const handleSaveUserBtn = () => setShowUserModal(false)

    const handleNewHouseModal = () => setShowNewHouseModal(true)
    const handleSaveNewHouseBtn = () => setShowNewHouseModal(false)

    return (

        <Container>

            <Row className="userInfo">
                <Col>
                    <Row className="align-items-center">
                        <Col className="col" md={{ span: 2, offset: 3 }}>
                            <img className="profileImg" src={userDetails?.profileImg} alt='profile'></img>
                        </Col>
                        <Col className="col" md={6}>
                            <h1 className="name">{userDetails?.firstName} {userDetails?.lastName}</h1>
                            <Button className="editBtn myBtn" onClick={handleEditImgBtn}>Editar imagen</Button>
                            <Button className="editBtn myBtn" onClick={handleEditUserBtn}>Editar perfil</Button>
                        </Col>
                    </Row>
                </Col>
            </Row>


            <h2 className="section-title">Tus suscripciones</h2>
            <Row>
                < ResultsHouses houses={subscriptions} width={4} />
            </Row>

            <h2 className="section-title">Tus próximas reservas</h2>
            <Row>
                <MyNextBookings></MyNextBookings>
            </Row>

            <h2 className="section-title">Pueblos a los que sigues</h2>
            <Row>
                {isLoaded && < MyFollowedVillages followedVillages={userDetails.followedVillages} size={4} />}
            </Row>

            <h2 className="section-title">Tus casas favoritas</h2>
            <Row>
                {isLoaded && < ResultsHouses houses={userDetails.favHouses} width={6} />}
            </Row>

            <h2 className="section-title">Tus casas</h2>
            <Row>
                <ResultsHouses houses={myHouses} width={3} />
                <Col sm={12} className="addBtn">
                    <Button className='myBtn newHouseBtn' onClick={handleNewHouseModal}>Añadir una casa</Button>
                </Col>
            </Row>




            <Modal show={showImageModal} onHide={handleSaveImageBtn} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>Subir imagen</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {isLoaded && <UserImageForm closeModal={handleSaveImageBtn} refreshDetails={getDetails} />}
                </Modal.Body>
            </Modal>

            <Modal show={showUserModal} onHide={handleSaveUserBtn} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>Editar perfil</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {isLoaded && <UserEditForm {...userDetails} closeModal={handleSaveUserBtn} refreshDetails={getDetails} />}
                </Modal.Body>
            </Modal>

            <Modal show={showNewHouseModal} onHide={handleSaveNewHouseBtn} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>Añadir una nueva casa</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <NewHouseForm closeModal={handleSaveNewHouseBtn} refreshDetails={getMyHouses}></NewHouseForm>
                </Modal.Body>
            </Modal>

        </Container>
    )
}

export default UserProfilePage