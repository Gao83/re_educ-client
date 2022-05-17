import { Card, Col, Container, Row } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from "@fortawesome/free-solid-svg-icons"
import './TeacherCard.css'
import { Link } from "react-router-dom"

const TeacherCard = ({ username, profileImg, _id }) => {

    return (
        <Container>
            <Link to={`/perfil/${_id}`} style={{ textDecoration: 'none', color: "black" }}>
            <Row>
                <Col md={{ span: 3, offset: 1 }}>
                    <Card style={{ width: '100%' }}>
                        <Card.Img variant="top" src={profileImg} />
                    </Card>
                </Col>
                <Col md={{ span: 6 }}>
                    <Card.Body>
                        <Row>
                            <Col md={{ span: 6 }}>
                                <Card.Title>{username}</Card.Title>
                            </Col>
                        </Row>
                    </Card.Body>
                </Col>
            </Row>
        </Link>
        </Container >
    )
}
export default TeacherCard