import { Container, Col } from "react-bootstrap"
import UserSignupForm from "../../components/UserSignupForm/UserSignupForm"


const UserSignupPage = () => {

    return (
        <Container>
            <Col md={{ span: 6, offset: 3 }}>
                <h1>Registro</h1>
                <hr />
                <UserSignupForm />
            </Col>

        </Container>
    )
}

export default UserSignupPage