import { useEffect, useState } from "react"
import { Col, Container, Row, Button } from "react-bootstrap"
import { useParams, Link } from "react-router-dom"
import CardOneCourse from "../../components/CardOneCourse/CardOneCourse"
import Loader from "../../components/Loader/Loader"
import Ratings from "../../components/Ratings/Ratings"
import courseService from "../../services/courses.service"
import "./CourseDetailsPage.css"

const CourseDetailsPage = () => {

    const [courseDetail, setcourseDetails] = useState({})
    const [showMore, setShowMore] = useState(false);

    const { course_id } = useParams()

    useEffect(() => loadCourse(), [course_id])
    const loadCourse = () => {
        courseService
            .getOneCourse(course_id)
            .then(({ data }) => {
                setcourseDetails(data)
            })
            .catch(err => console.log(err))
    }

    const { title, owner, requirements, description, content, headline, avgRating, _id } = courseDetail
    // const { text } = courseDetail.content

    return (

        courseDetail
            ?
            <>
                <Col md={{ span: 3 }}>
                    <CardOneCourse {...courseDetail} />
                </Col>
                <div className="course-details-hero">
                    <h1>{title} </h1>
                    <p>{headline} </p>
                    <p>{avgRating}</p>
                    <Link to={`/perfil/${_id}`}>
                        <p>Creado por: {owner?.username} </p>
                    </Link>
                </div>
                <Container>
                    <Row>
                        <Col md={{ span: 6 }}>
                            <Row>
                                <Col className="courses-require">
                                    <h4>Requisitos</h4>
                                    <ul>
                                        <li>
                                            <p>{requirements}</p>
                                        </li>
                                    </ul>
                                    <h4>Detalles</h4>
                                    <p>{description} </p>
                                    <div>
                                        <h4>Contenido</h4>
                                        {showMore ? content : `${content?.substr(0, 300)}`}
                                        <br></br>
                                        <Button className="btn-dark btn-read-more" onClick={() => setShowMore(!showMore)}>{showMore ? "Ver menos" : "Ver más"}</Button>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
                <Col className="course-detail-page-rating" md={{ span: 4 }}>
                    <h1>Valoraciones</h1>
                    <hr />
                    <Ratings course_id={course_id} />
                </Col>
            </> :
            <Loader />
    )
}
export default CourseDetailsPage