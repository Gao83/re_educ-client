import CourseCardSmall from "../CourseCardSmall/CourseCardSmall"
import Loader from "../Loader/Loader"
import Carousel from "react-elastic-carousel";
import { Link } from "react-router-dom";
import { Col } from "react-bootstrap";


const CourseByRating = ({ coursesByRating }) => {

    const breakpoints = [
        { width: 400, itemsToShow: 1 },
        { width: 500, itemsToShow: 2 },
        { width: 720, itemsToShow: 4 },
        { width: 1200, itemsToShow: 6 },
        { width: 1500, itemsToShow: 8 }

    ]

    return (
        coursesByRating ?
            <>
                <Carousel breakPoints={breakpoints}>

                    {
                        coursesByRating.map(eachCourse => {

                            return (
                                <Col key={eachCourse._id}>

                                    <Link to={`/cursos/${eachCourse._id}`} style={{ textDecoration: 'none', color: "black" }}>
                                        <CourseCardSmall  {...eachCourse} />
                                    </Link>

                                </Col>
                            )

                        })
                    }
                </Carousel>


            </> :
            <Loader />
    )
}
export default CourseByRating