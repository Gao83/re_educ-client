import { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import authService from './../../services/auth.service'
import { useNavigate } from 'react-router-dom'


//REGISTER IN DB. OK NEED TO IMPLEMENT CLOSEMODAL LATER

const UserSignupForm = () => {

    const [signupForm, setSignupForm] = useState({
        username: '',
        email: '',
        password: ''
    })

    const { username, email, password } = signupForm

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
                navigate('/iniciar-sesion')
            })
            .catch(err => console.log(err))
    }

    return (

        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="username">
                <Form.Label>Nombre Usuario</Form.Label>
                <Form.Control type="text" value={username} onChange={handleInputChange} name="username" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email </Form.Label>
                <Form.Control type="text" value={email} onChange={handleInputChange} name="email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="password">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control type="text" value={password} onChange={handleInputChange} name="password" />
            </Form.Group>
            <div>
                <Button className='btn btn-warning' type="submit" style={{ width: '100%' }}>Registrar</Button>
            </div>
        </Form>
    )
}

export default UserSignupForm