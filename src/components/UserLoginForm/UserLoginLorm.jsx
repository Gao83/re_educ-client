import { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import authService from './../../services/auth.service'
import { useNavigate } from 'react-router-dom'


const UserLoginForm = () => {

    return (

        <Form >

            <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" name="email" placeholder='Introduzca su email' />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control type="password" name="password" placeholder='Introduzca su contraseña'/>
            </Form.Group>
            <div >
                <Button className='myBtn loginBtn' variant="dark" type="submit" style={{ width: '100%' }}>Iniciar sesión</Button>
            </div>

        </Form>
    )
}

export default UserLoginForm