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
                <Card.Body>
                        <Card.Title className="overflow-ellipsis"><h6>{title}</h6></Card.Title>
                    <div>
                        <div className="score-card-small ">
                            {/* <p>{avgRating}</p> */}
                            <p className="star">{starts(result)}</p>
                        </div>
                        <div>
                            {price/100}€
                        </div>
                    </div>
                </Card.Body>

            </Card >
        </Link>
        </div >
    )
}
export default CourseCardSmall