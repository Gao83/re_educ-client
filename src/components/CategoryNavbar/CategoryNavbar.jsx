import { Navbar, Container, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../../context/auth.context'
import './CategoryNavbar.css'
const CategoryNavbar = () => {

    const { isLoggedIn } = useContext(AuthContext)


    return (
        <>
            <Navbar collapseOnSelect expand="lg" id="category-navbar">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav category-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Link to="/cursos/filtro/tecnologia">Tecnología</Link>
                            <Link to="/cursos/filtro/diseno">Diseño</Link>
                            <Link to="/cursos/filtro/marketing">Marketing</Link>
                            <Link to="/cursos/filtro/informatica-y-software">Informática y software</Link>
                            <Link to="/cursos/filtro/musica">Música</Link>
                            <Link to="/cursos/filtro/salud-y-fitness">Salud y fitness</Link>
                            <Link to="/cursos/filtro/otros">Otros</Link>
                            {isLoggedIn
                                ?
                                <>
                                    <Link to="/cursos/crear" className="nav-link">Registro de Cursos</Link>
                                </>
                                :
                                <>
                                </>
                            }


                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )

}

export default CategoryNavbar