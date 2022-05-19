import { Col, Container } from "react-bootstrap"
import CourseCard from "../CourseCard/CourseCard"
import Loader from "../Loader/Loader"
import Carousel from "react-elastic-carousel";
// import ReactPaginate from "react-paginate"
import { useEffect, useState } from "react";

const CourseList = ({ courses }) => {


    const [coursePaginate, setCoursePaginate] = useState(courses?.slice(0, 5))










    const [pageNumber, setPageNumber] = useState(0)

    const coursePerPage = 1
    const pageVisited = pageNumber * coursePerPage
    const displayCourse = coursePaginate.slice(pageVisited, pageVisited + coursePerPage)

    console.log('---------------------------', displayCourse)




    const breakpoints = [
        { width: 400, itemsToShow: 1 },
        { width: 500, itemsToShow: 2 },
        { width: 720, itemsToShow: 4 },
        { width: 1200, itemsToShow: 6 },
        { width: 1500, itemsToShow: 8 }
    ]







    return (




        <h4>holiii</h4>
        // displayCourse
        //     ?
        //     <div breakPoints={breakpoints} >
        //         {
        //             courses.map(course => {
        //                 return (
        //                     <Col key={course._id}>
        //                         <>
        //                             <CourseCard {...course} />
        //                         </>
        //                     </Col>
        //                 )
        //             })
        //         }

        //     </div>
        //     :
        //     <Loader />
    )
}
export default CourseList