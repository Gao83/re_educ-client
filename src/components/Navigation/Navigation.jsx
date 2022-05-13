import './Navigation.css'
import { Navbar, Container, Nav, Form, FormControl, Button } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const Navigation = () => {

    return (
        <>
            <Navbar bg="light" variant="light" expand="lg">
                <Container>
                    <Navbar.Brand href="/"><img className="logo-navbar" src="./../../img/re_educ_logo.png" alt="logo" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
                    <Nav className="me-auto">
                        <NavLink to="/registro" className="nav-link">SignUp</NavLink>
                        <NavLink to="/iniciar-sesion" className="nav-link">Login</NavLink>
                        <NavLink to="/perfil" className="nav-link">Perfil</NavLink>
                        <NavLink to="/cursos/crear" className="nav-link">Registro de Cursos</NavLink>
                        <NavLink to="#" className="nav-link">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart-fill" viewBox="0 0 16 16">
                                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                            </svg>
                        </NavLink>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default Navigation