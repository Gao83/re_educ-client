import { Card, Col, Row } from "react-bootstrap"
import "./CourseCardSmall.css"
import { Link } from 'react-router-dom'


const CourseCardSmall = ({ _id, title, courseImg, headline, price, avgRating }) => {


    let result = Math.round(avgRating)

    const starts = (result) => {
        switch (result) {
            case 1:
                return '★'
                break
            case 2:
                return '★★'
                break
            case 3:
                return '★★★'
                break
            case 4:
                return '★★★★'
                break
            case 5:
                return '★★★★★'
                break
        }

    }
    return (
        <div className="body-score-card">
            <Link to={`/cursos/${_id}`} style={{ textDecoration: 'none', color: "black" }}>
                <Card>
                    <Card.Img variant="top" src={courseImg} />
                    <Card.Body className="card-body">
                        <Card.Title><h5><strong>{title}</strong></h5></Card.Title>
                        {/* {headline} */}
                    </Card.Body>
                </Card >
                    <div className="card-price">
                        {price}€
                    </div>
            </Link>
        </div >
    )
}
export default CourseCardSmall