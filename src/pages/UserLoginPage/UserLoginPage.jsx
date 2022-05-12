import { Container, Col } from "react-bootstrap"
import UserLoginForm from "../../components/UserLoginForm/UserLoginLorm"


const UserLoginPage = () => {

    return (
        <Container>
            <Col md={{ span: 6, offset: 3 }}>
                <h1>Iniciar Sesión</h1>
                <hr />
                <UserLoginForm />
            </Col>

        </Container>
    )
}

export default UserLoginPage