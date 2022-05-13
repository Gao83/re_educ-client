import { Card, Col, Container, Row } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from "@fortawesome/free-solid-svg-icons"
import "./CourseCard.css"
import { Link } from "react-router-dom"

const CourseCard = ({ _id, title, courseImg, headline, price, avgRating }) => {

    return (
        <Container>
            <Link to={`/cursos/${_id}`} style={{ textDecoration: 'none', color: "black" }}>
                <Row>
                    <Col md={{ span: 3, offset: 1 }}>
                        <Card style={{ width: '100%' }}>
                            <Card.Img variant="top" src={courseImg} />
                        </Card>
                    </Col>
                    <Col md={{ span: 6 }}>
                        <Card.Body>
                            <Row>
                                <Col md={{ span: 6 }}>
                                    <Card.Title>{title}</Card.Title>
                                </Col>
                                <Col md={{ span: 6 }} className="d-flex justify-content-end">
                                    <Card.Title>{price}€</Card.Title>
                                </Col>
                            </Row>
                            <Card.Text>{headline}</Card.Text>

                            <Col md={{ span: 6 }}>
                                <Card.Title>{avgRating}  <FontAwesomeIcon className="star" icon={faStar} /> </Card.Title>
                            </Col>
                        </Card.Body>
                    </Col>
                </Row>
            </Link>
        </Container >
    )
}
export default CourseCard