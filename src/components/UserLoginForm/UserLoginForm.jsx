import { useState, useContext } from 'react'
import { Form, Button } from 'react-bootstrap'
import authService from '../../services/auth.service'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/auth.context'

//LOGIN OK NEED TO IMPLEMENT TEXTCONTENT MESSGER  LATER

const UserLoginForm = () => {

    const [loginForm, setLoginForm] = useState({
        password: '',
        email: ''
    })

    const { email, password } = loginForm

    const navigate = useNavigate()

    const { storeToken, authenticateUser } = useContext(AuthContext)

    const handleInputChange = e => {
        const { name, value } = e.target
        setLoginForm({
            ...loginForm,
            [name]: value
        })
    }

    function handleSubmit(e) {

        e.preventDefault()

        authService
            .login(loginForm)
            .then(({ data }) => {
                storeToken(data.authToken)
                authenticateUser()
                navigate('/')

            })
            .catch(err => console.log(err))
    }

    return (

        <Form onSubmit={handleSubmit} >

            <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" name="email" placeholder='Introduzca su email' value={email} onChange={handleInputChange}/>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control type="password" name="password" placeholder='Introduzca su contraseña' value={password} onChange={handleInputChange} />
            </Form.Group>
            <div >
                <Button className='myBtn loginBtn' variant="dark" type="submit" style={{ width: '100%' }}>Iniciar sesión</Button>
            </div>

        </Form>
    )
}

export default UserLoginForm