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
                    <Navbar.Toggle aria-controls="responsive-navbar-nav category-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav ">
                        <Nav className="me-auto">
                            <Link to="/cursos/filtro/tecnologia">Tecnología</Link>
                            <Link to="/cursos/filtro/diseno">Diseño</Link>
                            <Link to="/cursos/filtro/marketing">Marketing</Link>
                            <Link to="/cursos/filtro/informatica-y-software">Informática y software</Link>
                            <Link to="/cursos/filtro/musica">Música</Link>
                            <Link to="/cursos/filtro/salud-y-fitness">Salud y fitness</Link>
                            <Link to="/cursos/filtro/otros">Otros</Link>
                            {/* <Link></Link> */}

                            <SearchBar />
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )

}

export default CategoryNavbar