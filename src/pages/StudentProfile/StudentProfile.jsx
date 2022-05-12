import { useState, useEffect, useContext } from 'react'
import { AuthContext } from '../../context/auth.context'
import './StudentProfile.css'
import { Form, Button, Container, Row, Col } from 'react-bootstrap'
import usersService from '../../services/users.service'
import coursesService from '../../services/courses.service'
import { useParams, useNavigate } from 'react-router-dom'

const StudentProfile = () => {

    const { user } = useContext(AuthContext)
    const { id } = useParams()

    const [userDetails, setUserDetails] = useState({})
    const [myCourses, setMyCourses] = useState([])

    useEffect(() => {
        getOneUser()
        // getAllCourses()
    }, [id])



    const getOneUser = () => {
        usersService
            .getOneUser(id)
            .then(({ data }) => {
                console.log(data)
                setUserDetails(data)
            })
            .then(err => console.log(err))
    }
    user ? console.log(user) : console.log('VACIOOOOOOO')

    
    // const getAllCourses = () => {
    //     coursesService
    //         .getAllCourses()
    //         .then((courseData) => setMyCourses(courseData))
    //         .then(err => console.log(err))
    // }

    return (
        user ?
            <Container className="container-student">
                <Row>
                    <Col md={{ span: 4, offset: 1 }}>
                        <h1>Este es tu perfil {user.username}</h1>
                        <hr></hr>
                        <p><strong>Intereses</strong></p>
                        <br></br>
                        <p>{user.interests}</p>
                        <p><strong>Educación</strong></p>
                        <br></br>
                        <p>{user.education}</p>
                        <p><strong>Sobre mí</strong></p>
                        <br></br>
                        <p>{user.aboutMe}</p>
                    </Col>
                    <Col md={{ span: 6, offset: 1 }}>
                        <h1>Imagen de perfil</h1>
                        <img src={user.profileImg}></img>
                        <hr></hr>
                    </Col>
                </Row>

                <Row className="courses-carousel">
                    <Col md={{ span: 6, offset: 2 }}>
                        <div>
                            {myCourses.courses}
                        </div>
                    </Col>
                </Row>

            </Container>
            :
            <h1>cargandoooo</h1>
    )
}


export default StudentProfile