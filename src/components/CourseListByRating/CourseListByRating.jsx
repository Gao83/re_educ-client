import { Col, Container, Row } from "react-bootstrap"
import CourseCardSmall from "../CourseCardSmall/CourseCardSmall"
import Loader from "../Loader/Loader"
import Carousel from "react-elastic-carousel";


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
                                <CourseCardSmall key={eachCourse?._id} {...eachCourse} />

                            )

                        })
                    }
                </Carousel>


            </> :
            <Loader />
    )
}
export default CourseByRating