// import './Navigation.css'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
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
                            <Nav.Link href="#">Tecnología</Nav.Link>
                            <Nav.Link href="#">Diseño</Nav.Link>
                            <Nav.Link href="#">Marketing</Nav.Link>
                            <Nav.Link href="#">Informática y software</Nav.Link>
                            <Nav.Link href="#">Música</Nav.Link>
                            <Nav.Link href="#">Salud y fitness</Nav.Link>
                            <SearchBar />
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )

}

export default CategoryNavbar