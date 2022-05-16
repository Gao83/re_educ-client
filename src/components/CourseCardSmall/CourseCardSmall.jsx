import { Card, Col, Row } from "react-bootstrap"
import "./CourseCardSmall.css"

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
            <Card>
                <Card.Img variant="top" src={courseImg} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    {headline}
                    <div>
                        <div className="score-card-small ">
                            <p>{avgRating}</p>
                            <p className="star">{starts(result)}</p>
                        </div>
                        <div>
                            {price}€
                        </div>
                    </div>
                </Card.Body>

            </Card >
        </div>


    )
}
export default CourseCardSmall