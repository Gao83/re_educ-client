import { Col, Container } from "react-bootstrap"
import CourseCard from "../CourseCard/CourseCard"
import Loader from "../Loader/Loader"

const CourseList = ({ courses }) => {
    return (
        courses
            ?
            <Container>
                {
                    courses.map(course => {
                        return (
                            <Col key={course._id}>
                                <>
                                    <CourseCard {...course} />
                                    <hr />
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