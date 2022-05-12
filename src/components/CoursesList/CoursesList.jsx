
import { Col, Container, Spinner } from "react-bootstrap"
import CourseCard from "../CourseCard/CourseCard"



const CourseList = ({ courses }) => {

    return (

        courses
            ?
            <Container>
                {
                    courses.map(course => {
                        return (
                            <Col key={course._id}>

                                {/* <p>{course.title}</p> */}
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
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>

    )
}
export default CourseList