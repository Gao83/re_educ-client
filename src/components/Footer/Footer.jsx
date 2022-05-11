import './Footer.css'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {

    return (
        <>
            <footer>
                <Container>
                    <Row>
                        <Col md={{ span: 4 }}>
                            <img className="logo-footer" src="./../../img/re_educ_logo_white.png" alt="logo" />

                        </Col>
                        <Col md={{ span: 4 }}>
                            <p><strong>Developed by</strong><br></br> Isaac Miralles <br></br> Cristian Calderón<br></br>  & Jesús Martín</p>
                        </Col>
                        <Col md={{ span: 4 }}>
                            <p>Aviso Legal<br></br> Política de privacidad<br></br> Política de cookies</p>


                        </Col>
                    </Row>
                </Container>
            </footer>
        </>
    )

}
export default Footer