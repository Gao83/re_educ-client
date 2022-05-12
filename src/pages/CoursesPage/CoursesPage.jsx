import { Container } from "react-bootstrap"

import courseService from "../../services/courses.service"
import { useEffect, useState } from "react"
import CourseList from "../../components/CoursesList/CoursesList"

const CoursePage = () => {
    const [courses, setAllCourses] = useState([])
    useEffect(() => loadCourses(), [])

    const loadCourses = () => {
        courseService
            .getAllCourses()
            .then(({ data }) => {
                setAllCourses(data)
            })
            .then(err => console.log(err))
    }
    return (
        <>
            <Container>
                <h1>Listado de cursos</h1>
                <hr />
                <CourseList courses={courses} />
            </Container>
        </>
    )
}
export default CoursePage