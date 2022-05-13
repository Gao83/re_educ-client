import { useEffect, useState } from "react"
import { Col, Container, Row } from "react-bootstrap"
import { useParams } from "react-router-dom"
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
                <div className="course-details-hero">
                    <h1>{title} </h1>
                    <p>{headline} </p>
                    <p>{avgRating}</p>
                    <p>Creado por: {owner?.username} </p>
                </div>
                <Container>
                    <Row>
                        <Col md={{ span: 12 }}>

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
                </Container>
                <h1>{courseDetail.title} </h1>
                <h1>{courseDetail.description} </h1>
                <Ratings course_id={course_id} />
            </> :
            <Loader />
    )
}
export default CourseDetailsPage