import { Col, Container } from "react-bootstrap"
import CourseCard from "../CourseCard/CourseCard"
import Loader from "../Loader/Loader"
import Carousel from "react-elastic-carousel";


const CourseList = ({ courses }) => {

    const breakpoints = [
        { width: 400, itemsToShow: 1 },
        { width: 500, itemsToShow: 2 },
        { width: 720, itemsToShow: 4 },
        { width: 1200, itemsToShow: 6 },
        { width: 1500, itemsToShow: 8 }
    ]

    return (
        courses
            ?
            <div breakPoints={breakpoints} >
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

            </div>
            :
            <Loader />
    )
}
export default CourseList