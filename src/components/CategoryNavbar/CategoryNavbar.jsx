// import './Navigation.css'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'
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
                            <Link href="#">Tecnología</Link>
                            <Link href="#">Diseño</Link>
                            <Link href="#">Marketing</Link>
                            <Link href="#">Informática y software</Link>
                            <Link href="#">Música</Link>
                            <Link href="#">Salud y fitness</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )

}

export default CategoryNavbar