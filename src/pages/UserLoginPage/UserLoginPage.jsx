import { Container, Col } from "react-bootstrap"
import UserLoginForm from "../../components/UserLoginForm/UserLoginForm"


const UserLoginPage = () => {

    return (
        <Container>
            <Col md={{ span: 6, offset: 3 }}>

                <UserLoginForm />
            </Col>

        </Container>
    )
}

export default UserLoginPage