import './Footer.css'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {

    return (
        <>
            <footer>
                <Container>
                    <Row>
                        <Col md={{ span: 4 }} className="col-cookie">
                            <p>Aviso Legal<br></br> Política de privacidad<br></br> Política de cookies</p>
                        </Col>
                        <Col md={{ span: 4 }} className="col-developed">
                            <p><strong>Developed by</strong><br></br>Isaac Miralles <br></br> Cristian Calderón<br></br>  & Jesús Martín</p>
                        </Col>
                        <Col md={{ span: 4 }} className="logo-footer">
                            <img  src="./../../img/re_educ_logo_2_white.png" alt="logo" />
                        </Col>
                    </Row>
                </Container>
            </footer>
        </>
    )

}
export default Footer