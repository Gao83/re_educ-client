import { Container, Col, Button} from "react-bootstrap"
import UserSignupDetailsForm from "../../components/UserSignupDetailsForm/UserSignupDetailsForm"


const UserSignupDetailsPage = () => {

    return (


        <Container>
            <Col md={{ span: 6, offset: 3 }}>
                <h1>Completa tu perfil</h1>
                <hr />
                <UserSignupDetailsForm />
            </Col>
        </Container>
    )
}

export default UserSignupDetailsPage