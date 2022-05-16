import { useState, useEffect, useContext } from 'react'
import './UserProfile.css'
import { Button, Container, Row, Col } from 'react-bootstrap'
import usersService from '../../services/users.service'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'


const UserProfile = () => {

    const [userDetails, setUserDetails] = useState({})
    const { id } = useParams()


    useEffect(() => {

        usersService
            .getOneUser(id)
            .then(({ data }) => {
                setUserDetails(data)
                console.log(data)
            })
            .catch(err => console.log(err))
    }, [])


    const { username, _id, interests, education, aboutMe, profileImg } = userDetails

    return (

        userDetails ?
            <>
                <div className="username-box">
                    <h1>Este es el perfil  de {username}</h1>
                </div>
                <Container className="container-student">
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
                        </Col>
                    </Row>


                </Container>
            </>
            :
            <h1>Cargando</h1>

    )
}


export default UserProfile