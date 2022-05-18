import { Col, Container } from "react-bootstrap"
import CourseCard from "../CourseCard/CourseCard"
import Loader from "../Loader/Loader"
import Carousel from "react-elastic-carousel";
// import ReactPaginate from "react-paginate"
import { useState } from "react";

const CourseList = ({ courses }) => {

    const [coursePaginate, setCoursePaginate] = useState(courses?.slice(0, 50))

    const [pageNumber, setPageNumber] = useState(0)

    const coursePerPage = 5
    const pageVisited = pageNumber * coursePerPage
    const displayCourse = coursePaginate?.slice(pageVisited, pageVisited + coursePerPage)
        .map(course => {
            return (
                <CourseCard {...course} />

            )
        })
    console.log(coursePaginate)



    // const breakpoints = [
    //     { width: 400, itemsToShow: 1 },
    //     { width: 500, itemsToShow: 2 },
    //     { width: 720, itemsToShow: 4 },
    //     { width: 1200, itemsToShow: 6 },
    //     { width: 1500, itemsToShow: 8 }
    // ]







    return (
        displayCourse
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