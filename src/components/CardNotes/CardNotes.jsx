import { Card } from "react-bootstrap"
import Loader from "../Loader/Loader"
const CardNotes = ({ content, createdAt, title }) => {

    const date = new Date(createdAt);  // dateStr you get from mongodb

    const d = date.getDate();
    const m = date.getMonth() + 1;
    const y = date.getFullYear();

    const realDate = `${d} ${m} ${y}`
    return (

        <>
            <Card style={{ width: '18rem' }} className="mb-2"
            >
                <Card.Header>Creado: {realDate}</Card.Header>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {content}
                    </Card.Text>
                </Card.Body>
            </Card>


        </>
    )

}
export default CardNotes