import { Card, Col, Container, Row, Carousel } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from "@fortawesome/free-solid-svg-icons"
import "./CourseCard.css"
import { Link } from "react-router-dom"

const CourseCard = ({ _id, title, courseImg, headline, price, courses }) => {

    return (

        <>
            <div className="body-score-card">
                <Link to={`/cursos/${_id}`} style={{ textDecoration: 'none', color: "black" }}>
                    <Card>
                        <Card.Img variant="top" src={courseImg} />
                        <Card.Body>
                            <Card.Title>{title}</Card.Title>
                            {/* {headline} */}
                            <div className="score-card-small ">
                                <p>{courses}</p>
                                {/* <p className="star">{starts(result)}</p> */}
                            </div>
                        </Card.Body>
                    </Card >
                    <div className="card-price">
                        {price/100}€
                    </div>
                </Link>
            </div >
        </>
    )
}
export default CourseCard