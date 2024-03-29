import { Container, Row, Card, Col } from "react-bootstrap"
import coursesService from "../../services/courses.service"
import { useEffect, useState } from "react"
import CourseList from "../../components/CoursesList/CoursesList"
import { useParams } from "react-router-dom"
import { Link, } from 'react-router-dom'
import CourseCard from "../../components/CourseCard/CourseCard"
import Loader from "../../components/Loader/Loader"
import './CoursesFilteredByCategory.css'




const CoursesFilteredByCategory = () => {

    const { category } = useParams()

    const [categoryCourses, SetCategoryCourses] = useState([])

    useEffect(() => loadCoursesByCategory(), [category]
    )


    const loadCoursesByCategory = () => {
        coursesService
            .filterByCategory(category)
            .then(({ data }) => {
                SetCategoryCourses(data)
            })
            .then(err => console.log(err))
    }

    return (
        categoryCourses
            ?
            <Container className="container-category-courses">
                {
                    categoryCourses.map(category => {
                        console.log(category.av)
                        return (
                            <Col>
                                <>
                                    <CourseCard {...category} />
                                    <hr></hr>
                                    <br></br>
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
export default CoursesFilteredByCategory