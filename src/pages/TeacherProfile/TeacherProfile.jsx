import { useState, useEffect, useContext } from 'react'
import './TeacherProfile.css'
import { Modal, Container, Row, Col } from 'react-bootstrap'
import usersService from '../../services/users.service'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import RatingsTeachers from '../../components/RatingsTeacher/RatingsTeacher'
import Loader from '../../components/Loader/Loader'
import CoursesListByUser from '../../components/CourseListByUser/CourseListByUser'
import CoursesByTeacher from '../../components/CoursesByTeacher/CoursesByTeacher'
import CreateRatingTeacher from '../../components/CreateRatingTeacher/CreateRatingTeacher'


const UserProfile = () => {

    const [userDetails, setUserDetails] = useState({})
    const { id } = useParams()

    useEffect(() => {

        usersService
            .getOneUser(id)
            .then(({ data }) => {
                setUserDetails(data)

            })
            .catch(err => console.log(err))
    }, [])


    const { username, interests, education, aboutMe, profileImg } = userDetails

    const [showModal, setShowModal] = useState(false)
    const openModal = () => setShowModal(true)
    const closeModal = () => setShowModal(false)

    return (
        <>
            {
                userDetails ?
                    <>
                        < div className="username-box" >
                            <h1>Este es el perfil  de {username}</h1>
                        </div >
                        <Container className="container-teacher">
                            <Row>
                                <Col md={{ span: 4, offset: 1 }}>
                                    <p><strong>Intereses</strong></p>
                                    <p>{interests}</p>
                                    <br></br>
                                    <p><strong>Educación</strong></p>
                                    <p>{education}</p>
                                    <br></br>
                                    <p><strong>Sobre mí</strong></p>
                                    <p>{aboutMe}</p>
                                </Col>
                                <Col md={{ span: 6, offset: 1 }}>
                                    <h1>Imagen de perfil</h1>
                                    <img src={profileImg}></img>
                                    <hr></hr>

                                    <Link className="link-comments" onClick={openModal} to='#'>Valorar al instructor</Link>
                                    <Modal show={showModal} onHide={closeModal}>
                                        <Modal.Body>
                                            <CreateRatingTeacher />
                                        </Modal.Body>
                                    </Modal>
                                </Col>
                            </Row>
                        </Container>

                    </>
                    :
                    <Loader />
            }

            <Col md={{ span: 6, offset: 3 }} >
                <h1 >Mis Cursos</h1>
                <hr></hr>
                <CoursesByTeacher id={id} />
                <RatingsTeachers id={id} />
            </Col>
        </>

    )
}


export default UserProfile