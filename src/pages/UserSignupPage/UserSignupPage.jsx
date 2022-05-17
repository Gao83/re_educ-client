import { Container, Col, Row } from "react-bootstrap"
import UserSignupForm from "../../components/UserSignupForm/UserSignupForm"
import './UserSignupPage.css'

const UserSignupPage = () => {

    return (
        <>
            <Container>
                <Row>
                    <Col md={{ span: 6 }} className="col-signup-form">
                        <UserSignupForm />
                    </Col>
                    <Col md={{ span: 6 }}>
                        <div >
                            <p>Tenemos mogollón de cursos súper chachis para ti</p>
                            <div className="signup-box">
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default UserSignupPage