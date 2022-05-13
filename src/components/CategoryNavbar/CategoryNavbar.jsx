// import './Navigation.css'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import SearchBar from '../SearchBar/SearchBar'
import './CategoryNavbar.css'

const CategoryNavbar = () => {

    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Link to="#">Tecnología</Link>
                            <Link to="#">Diseño</Link>
                            <Link to="#">Marketing</Link>
                            <Link to="#">Informática y software</Link>
                            <Link to="#">Música</Link>
                            <Link to="#">Salud y fitness</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )

}

export default CategoryNavbar