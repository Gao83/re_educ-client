import './Navigation.css'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const CategoryNavbar = () => {

    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Nav className="category-navbar">
                        <Nav.Link href="#">Tecnología</Nav.Link>
                        <Nav.Link href="#">Diseño</Nav.Link>
                        <Nav.Link href="#">Marketing</Nav.Link>
                        <Nav.Link href="#">Informática y software</Nav.Link>
                        <Nav.Link href="#">Música</Nav.Link>
                        <Nav.Link href="#">Salud y fitness</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>

    )

}

export default CategoryNavbar