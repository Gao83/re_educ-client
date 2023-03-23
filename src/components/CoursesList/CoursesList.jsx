import { Col, Container } from "react-bootstrap"
import CourseCard from "../CourseCard/CourseCard"
import Loader from "../Loader/Loader"
import ReactPaginate from "react-paginate"
import { useEffect, useState } from "react";
import courseService from "../../services/courses.service"
import "./CoursesList.css"

const CourseList = () => {
    const [courses, setAllCourses] = useState([])
    const [isloaded, setIsLoaded] = useState(false)
    const [slicedCourses, setSlicedCourses] = useState([])
    const [pageNumber, setPageNumber] = useState(0)

    useEffect(() => {
        loadCourses()
    }, [isloaded])


    const coursePerPage = 5
    const pageVisited = pageNumber * coursePerPage
    const pageCount = Math.ceil(courses.length / coursePerPage)

    const loadCourses = () => {
        courseService
            .getAllCourses()
            .then(({ data }) => {
                setIsLoaded(true)
                setAllCourses(data)
                const sliced = courses.slice(pageVisited, pageVisited + coursePerPage)
                setSlicedCourses(sliced)
            })
            .catch(err => console.log(err))
    }


    const changePage = ({ selected }) => {
        setPageNumber(selected)
        const sliced = courses.slice(pageVisited, pageVisited + coursePerPage)
        setSlicedCourses(sliced)
    }
    console.log(slicedCourses)

    return (
      
            <div>
                {
                    slicedCourses.map(course => {
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
            </div> 


    )
}
export default CourseList