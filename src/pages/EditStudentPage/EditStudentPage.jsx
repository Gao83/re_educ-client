import UserSignupDetailsForm from '../../components/UserSignupDetailsForm/UserSignupDetailsForm'
import { Container, Col } from 'react-bootstrap'
import './EditStudentPage.css'
import { useParams } from 'react-router-dom'

const EditStudentPage = () => {

    const { id } = useParams()

    return (
        <>
            <Container className="profile-edit-form">
                <Col md={{ span: 6, offset: 3 }}>
                    <h1>Completa tu perfil</h1>
                    <hr />
                    <UserSignupDetailsForm id={id} />
                </Col>    
            </Container>
        </>
    )
}


export default EditStudentPage