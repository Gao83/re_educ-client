import { useEffect, useState } from "react"
import { Col, Container, Row } from "react-bootstrap"
import { useParams } from "react-router-dom"
import CardOneCourse from "../../components/CardOneCourse/CardOneCourse"
import Loader from "../../components/Loader/Loader"
import Ratings from "../../components/Ratings/Ratings"
import courseService from "../../services/courses.service"
import "./CourseDetailsPage.css"

const CourseDetailsPage = () => {

    const [courseDetail, setcourseDetails] = useState({})

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
    const { title, owner, requirements, description, headline, avgRating } = courseDetail

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
                    <p>Creado por: {owner?.username} </p>
                </div>
                <Container>
                    <Row>
                        <Col md={{ span: 4 }}>
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
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
                <Col className="course-detail-page-rating" md={{ span: 4 }}>
                    <h1>Valoraciones</h1>
                    <hr />
                    <Ratings  course_id={course_id} />
                </Col>
            </> :
            <Loader />
    )
}
export default CourseDetailsPage