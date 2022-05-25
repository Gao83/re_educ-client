import './Navigation.css'
import { Navbar, Container, Nav, Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useContext, useState } from 'react'
import { AuthContext } from '../../context/auth.context'
import UserLoginForm from '../UserLoginForm/UserLoginForm'
import UserSignupForm from '../UserSignupForm/UserSignupForm'
import SearchBar from '../SearchBar/SearchBar'

const Navigation = () => {

    const [showModal, setShowModal] = useState(false)
    const [showSignupModal, setShowSignupModal] = useState(false)

    const openModal = () => setShowModal(true)
    const openSignupModal = () => setShowSignupModal(true)

    const closeModal = () => setShowModal(false)
    const closeSignupModal = () => setShowSignupModal(false)

    const { user, logOutUser, isLoggedIn } = useContext(AuthContext)

    return (
        <>
            <Navbar bg="light" variant="light" expand="lg" className="navbar">
                <Container>
                    <Navbar.Brand href="/"><img className="logo-navbar" src="./../../img/re_educ_logo_2.png" alt="logo" /></Navbar.Brand>
                    <SearchBar />
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto"  >
                            {
                                user && <Link to="/perfil" className="nav-link justify-content-end user-navbar"><strong>Hola, {user.username}</strong></Link>
                            }
                            {
                                isLoggedIn
                                    ?
                                    <>
                                        <Link to="/perfil" className="nav-link">Perfil</Link>
                                        <Link to="/cursos" className="nav-link">Cursos</Link>
                                        <Link to="/" className="nav-link" onClick={logOutUser}>Cerrar sesión</Link>
                                        <Link to="#" className="nav-link">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart-fill" viewBox="0 0 16 16">
                                                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                                            </svg>
                                        </Link>
                                    </>
                                    :
                                    <>
                                        <Link to="#" className="nav-link" onClick={openSignupModal}>Registro</Link>
                                        <Modal show={showSignupModal} onHide={closeSignupModal}>
                                            <Modal.Body>
                                                <UserSignupForm closeModal={closeModal} />
                                            </Modal.Body>
                                        </Modal>
                        
                                </>
                        }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Navigation