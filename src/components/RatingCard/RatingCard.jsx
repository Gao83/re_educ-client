import { Card, Col, Container, Row } from "react-bootstrap"

const RatingCard = ({ image, content, rating, likes, owner, course, teacher, responses }) => {

    return (

        <Container>
            <Col className="colMargin">
                <h2>quien escribe </h2>
                <p>{owner} </p>
            </Col>

            <Col className="colMargin">
                <h2>Servicios </h2>
                <p>{content} </p>
            </Col>

            <Col className="colMargin">
                <h2>Imagen </h2>
                <img src={image} alt="" />
            </Col>

            <Col className="colMargin">
                <h2>Rating</h2>
                <p>{rating}</p>
                <h2>LIkes  </h2>
                <p>{likes}  </p>
            </Col>

        </Container >


    )
}
export default RatingCard