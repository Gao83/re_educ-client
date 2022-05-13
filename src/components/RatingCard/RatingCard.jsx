import { Card, Container } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from "@fortawesome/free-solid-svg-icons"

const RatingCard = ({ image, content, rating, likes, owner }) => {

    return (

        <Container>
            <Card border="dark" style={{ width: '18rem' }}>
                 <Card.Header>Creado por: {owner?.username}</Card.Header> 
                <Card.Body>
                    <Card.Title></Card.Title>
                    <Card.Text>
                        {content}
                    </Card.Text>
                    <Card.Text>
                        Valoración: {rating} <FontAwesomeIcon className="star" icon={faStar} />
                    </Card.Text>
                </Card.Body>
            </Card>

        </Container >

    )
}
export default RatingCard