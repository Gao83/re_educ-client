import { useState } from 'react'
import { Form, Button, Container } from 'react-bootstrap'
import './UserSignupForm.css'
import authService from './../../services/auth.service'
import { useNavigate } from 'react-router-dom'


//REGISTER IN DB. OK NEED TO IMPLEMENT CLOSEMODAL LATER

const UserSignupForm = ({closeModal}) => {

    const [signupForm, setSignupForm] = useState({
        username: '',
        email: '',
        password: '',
        role: ''
    })

    const { username, email, password, role } = signupForm

    const navigate = useNavigate()

    const handleInputChange = e => {
        const { name, value } = e.target
        setSignupForm({
            ...signupForm,
            [name]: value
        })
    }

    function handleSubmit(e) {
        e.preventDefault()

        authService
            .signup(signupForm)
            .then(({ data }) => {
                setSignupForm(data)
                // closeModal()
                navigate('/')
            })
            .catch(err => console.log(err))
    }

    return (

        <Container >
            <Form onSubmit={handleSubmit}>
                <h1>Regístrate</h1>
                <hr />
                <Form.Group className="mb-3" controlId="username">
                    <Form.Label>Nombre Usuario</Form.Label>
                    <Form.Control className="input-signup-form" type="text" value={username} onChange={handleInputChange} name="username" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email </Form.Label>
                    <Form.Control className="input-signup-form" type="text" value={email} onChange={handleInputChange} name="email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="password">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control className="input-signup-form" type="password" value={password} onChange={handleInputChange} name="password" />
                </Form.Group>
                <Form.Select aria-label="Default select example" value={role} onChange={handleInputChange} name='role' >
                    <option value="USER">Estudiante</option>
                    <option value="TEACHER">Profesional</option>
                </Form.Select>
                <div>
                    <Button className='btn btn-dark' type="submit" style={{ width: '100%' }} closeModal={closeModal} >Registrar</Button>
                </div>
            </Form>
        </Container>
    )
}

export default UserSignupForm