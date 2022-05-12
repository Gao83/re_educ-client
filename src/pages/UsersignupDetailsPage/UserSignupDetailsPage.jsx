import { Container, Form, Button } from "react-bootstrap"
// import './../../UserSignupForm.css'
import authService from '../../services/auth.service'
import { useNavigate } from 'react-router-dom'
import { useState } from "react"


const UserSignupDetailsPage = ({ closeModal }) => {

    const [signupDetailsForm, setSignupDetailsForm] = useState({
        interests: '',
        education: '',
        aboutMe: '',
        profileImg: ''
    })

    const { interests, aboutMe, profileImg } = signupDetailsForm

    const navigate = useNavigate()

    const handleInputChange = e => {
        const { name, value } = e.target
        setSignupDetailsForm({
            ...signupDetailsForm,
            [name]: value
        })
    }

    function handleSubmit(e) {
        e.preventDefault()

        authService
            .signup(signupDetailsForm)
            .then(({ data }) => {
                setSignupDetailsForm(data)
                navigate('/iniciar-sesion')
                closeModal()
            })
            .catch(err => console.log(err))
    }

    return (
        <Container className="signup-form">
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="interests">
                    <Form.Label>Intereses</Form.Label>
                    <Form.Control type="text" value={interests} onChange={handleInputChange} name='interests' />
                </Form.Group >

                <Form.Group className="mb-3" controlId="aboutMe">
                    <Form.Label>Sobre Mí</Form.Label>
                    <Form.Control as="textarea" value={aboutMe} name='aboutMe' onChange={handleInputChange} rows={3} />
                </Form.Group>

                <Form.Label>Educación</Form.Label>
                <Form.Select aria-label="Default select example" onChange={handleInputChange} name='education' >
                    <option value="Bachillerato">Bachillerato</option>
                    <option value="Formación Profesional">Formación Profesional</option>
                    <option value="Grado Universitario">Grado Universitario</option>
                    <option value="Enseñanzas de régimen especial">Enseñanzas de régimen especial</option>
                    <option value="otros">Otros</option>
                </Form.Select>

                <Form.Group className="mb-3" controlId="profileImg">
                    <Form.Label>Foto de perfil</Form.Label>
                    <Form.Control type="text" value={profileImg} onChange={handleInputChange} name='profileImg' />
                </Form.Group >
                <Button variant="dark" type="submit">Completar perfil</Button>
            </Form>
        </Container>
    )
}

export default UserSignupDetailsPage