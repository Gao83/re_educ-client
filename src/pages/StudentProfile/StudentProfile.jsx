import { useState, useEffect, useContext } from 'react'
import { AuthContext } from '../../context/auth.context'
import './StudentProfile.css'
import { Button, Container, Row, Col } from 'react-bootstrap'
import coursesService from '../../services/courses.service'
import usersService from '../../services/users.service'
import { Link, useParams } from 'react-router-dom'

const StudentProfile = () => {

    const { user } = useContext(AuthContext)
    const [userDetails, setUserDetails] = useState({})

    useEffect(() => {

        usersService
            .getOneUser(user._id)
            .then(({ data }) => {
                setUserDetails(data)
                console.log(data)
            })
            .catch(err => console.log(err))
    }, [])

    // const [myCourses, setMyCourses] = useState([])

    // const getAllCourses = () => {
    //     coursesService
    //         .getAllCourses()
    //         .then((courseData) => setMyCourses(courseData))
    //         .then(err => console.log(err))
    // }

    const { username, _id, interests, education, aboutMe, profileImg } = userDetails

    return (

        user ?
            <>
                <div className="username-box">
                    <h1>Este es tu perfil {username}</h1>
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
                            <Link to={`/perfil/editar/${user._id}`}><Button className='btn btn-dark btn-edit-profile' type="submit" style={{ width: '100%' }}>Editar perfil</Button></Link>
                        </Col>
                        <Col md={{ span: 6, offset: 1 }}>
                            <h1>Imagen de perfil</h1>
                            <img src={profileImg}></img>
                            <hr></hr>
                        </Col>
                    </Row>

                    {/* <Row className="courses-carousel">
                    <Col md={{ span: 6, offset: 2 }}>
                        <div>
                            {myCourses.courses}
                        </div>
                    </Col>
                </Row> */}

                </Container>
            </>
            :
            <h1>Cargando</h1>

    )
}


export default StudentProfile