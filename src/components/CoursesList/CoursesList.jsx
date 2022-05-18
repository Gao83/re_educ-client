import { Col, Container } from "react-bootstrap"
import CourseCard from "../CourseCard/CourseCard"
import Loader from "../Loader/Loader"

const CourseList = ({ courses }) => {
    return (
        courses
            ?
            <Container className="courses-list-container">
                {
                    courses.map(course => {
                        return (
                            <Col key={course._id}>
                                <>
                                    <CourseCard {...course} />
                                </>
                            </Col>
                        )
                    })
                }

            </Container>
            :
            <Loader />
    )
}
export default CourseList