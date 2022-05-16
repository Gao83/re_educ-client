import { useState, useEffect, useContext } from 'react'
import { AuthContext } from '../../context/auth.context'
import './StudentProfile.css'
import { Button, Container, Row, Col } from 'react-bootstrap'
import usersService from '../../services/users.service'
import { Link } from 'react-router-dom'

const StudentProfile = () => {

    const { user } = useContext(AuthContext)
    const [userDetails, setUserDetails] = useState({})

    useEffect(() => {

        usersService
            .getOneUser(user?._id)
            .then(({ data }) => {
                setUserDetails(data)
            })
            .catch(err => console.log(err))
    }, [user?._id])

    const { username, _id, interests, education, aboutMe, profileImg } = userDetails

    return (

        user ?
            <>
                <div className="username-box">
                    <h1>Este es tu perfil, {username}</h1>
                </div>
                <Container className="container-student">
                    <Row>
                        <Col md={{ span: 5, offset: 1 }}>
                            <p><strong>Intereses:  </strong><br></br>{interests}</p>
                            <p><strong>Educación: </strong><br></br>{education}</p>
                            <p><strong>Sobre mí: </strong><br></br>{aboutMe}</p>
                        </Col>
                        <Col md={{ span: 4, offset: 1 }}>
                            <h1>Imagen de perfil</h1>
                            <hr></hr>
                            <div className="img-box">
                                <img src={profileImg}></img>
                            </div>
                            <Link to={`/perfil/editar/${_id}`}><Button className='btn btn-dark btn-edit-profile' type="submit" style={{ width: '100%' }}>Editar perfil</Button></Link>

                        </Col>


                    </Row>

                    <Row className="profile-courses-col">
                        
                        <Col md={{ span: 8, offset: 2 }} >
                            <h1>Mis Cursos</h1>
                            <hr></hr>
                        </Col>
                    </Row>

                </Container>
            </>
            :
            <h1>Cargando</h1>

    )
}


export default StudentProfile