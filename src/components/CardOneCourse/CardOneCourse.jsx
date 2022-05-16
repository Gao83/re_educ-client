import { Button, Card } from "react-bootstrap"
import "./CardOneCourse.css"



const CardOneCourse = ({ courseImg, price, duration }) => {




    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={courseImg} />
            <Card.Body>
                <Button variant="primary">Comprar Curso</Button>
                <Card.Title> {price} </Card.Title>
                <Card.Text className="cardText">{duration}</Card.Text>

            </Card.Body>
        </Card>
    )

}
export default CardOneCourse