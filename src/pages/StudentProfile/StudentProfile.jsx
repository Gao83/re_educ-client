import { useState } from 'react'
import './StudentProfile.css'
import { Form, Button, Container, Row, Col } from 'react-bootstrap'
import { useEffect } from "react"
import authService from './../../services/auth.service'
import usersService from '../../services/users.service'
import { useNavigate } from 'react-router-dom'

const StudentProfile = () => {

    const [students, setStudents] = useState([])

    useEffect(() => loadUsers(), [])

    const loadUsers = () => {
        usersService
            .getAllStudents()
            .then(({ data }) => setStudents(data))
            .then(err => console.log(err))
    }

    return (

        <Container className="container-student">
            <Row>
                <Col md={{ span: 4, offset: 1 }}>
                    <h1>Este es tu perfil</h1>
                    <hr></hr>
                    {/* <p><strong>Intereses</strong></p> */}
                    <br></br>
                    {/* <p>{interests}</p> */}
                    <p><strong>Educación</strong></p>
                    <br></br>
                    {/* <p>{education}</p> */}
                    <p><strong>Sobre mí</strong></p>
                    <br></br>
                    {/* <p>{aboutMe}</p> */}
                </Col>
                <Col md={{ span: 6, offset: 1 }}>
                    <h1>Imagen de perfil</h1>
                    <hr></hr>
                </Col>
            </Row>

            <Row className="courses-carousel">
                <Col md={{ span: 6, offset: 2 }}>
                    <div>
                        {/* {courses} */}
                    </div>
                </Col>
            </Row>

        </Container>
    )
}


export default StudentProfile