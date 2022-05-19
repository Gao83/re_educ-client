import { Col, Container } from "react-bootstrap"
import CourseCard from "../CourseCard/CourseCard"
import Loader from "../Loader/Loader"
import Carousel from "react-elastic-carousel";
import ReactPaginate from "react-paginate"
import { useEffect, useState } from "react";
import courseService from "../../services/courses.service"

const CourseList = () => {
    const [courses, setAllCourses] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)
    const [pageNumber, setPageNumber] = useState(0)

    useEffect(() => {
        loadCourses()
    }, [])


    const loadCourses = () => {
        courseService
            .getAllCourses()
            .then(({ data }) => {
                setAllCourses(data)
                setIsLoaded(true)
            })
            .catch(err => console.log(err))
    }
    let displayCourse

    const coursePerPage = 5

    const pageVisited = pageNumber * coursePerPage

    console.log(courses)

    if (isLoaded) {

        displayCourse = courses.slice(pageVisited, pageVisited + coursePerPage)

    }
    const pageCount = Math.ceil(courses.length / coursePerPage)

    const changePage = ({ selected }) => {
        setAllCourses(selected)
    }

    console.log(displayCourse)

    return (

        isLoaded
            ?

            <div>
                {
                    displayCourse.map(course => {
                        return (
                            <Col key={course._id}>
                                <>

                                    <CourseCard {...course} />
                                </>
                            </Col>
                        )
                    })
                }
                <ReactPaginate
                    previousLabel={'Previous'}
                    nextLabel={'Next'}
                    pageCount={pageCount}
                    onPageChange={changePage}
                    containerClassName={'paginationBttns'}
                    previousLinkClassName={'previousBttn'}
                    nextLinkClassName={'nextBttn'}
                    disabledClassName={'paginationDisabled'}
                    activeClassName={'paginationActive'}
                />
            </div> :
            <Loader />


    )
}
export default CourseList