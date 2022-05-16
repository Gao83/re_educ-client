import { Container } from "react-bootstrap"
import courseService from "../../services/courses.service"
import { useEffect, useState } from "react"
import CourseByRating from "../../components/CourseListByRating/CourseListByRating"
import CourseList from "../../components/CoursesList/CoursesList"
import TeacherList from "../../components/TeachersList/TeacherList"

const CoursePage = () => {
    const [courses, setAllCourses] = useState([])
    const [coursesByRating, setCoursesByRating] = useState([])

    useEffect(() => {

        allCourseTogether()
    }, [])

    const allCourseTogether = () => {
        loadCourses()
        loadCoursesByRating()
    }

    const loadCourses = () => {
        courseService
            .getAllCourses()
            .then(({ data }) => {
                setAllCourses(data)
            })
            .then(err => console.log(err))
    }
    const loadCoursesByRating = () => {
        courseService
            .filterByRating()
            .then(({ data }) => {
                setCoursesByRating(data)
            })
            .catch(err => console.log(err))
    }
    return (
        <>
            <Container>
                <h3>Los mejor valorados</h3>
                <hr />
                <CourseByRating coursesByRating={coursesByRating} />

                <h3>Listado de cursos</h3>
                <hr />
                <CourseList courses={courses} />

            </Container>

            <Container>
                <h1>Listado de profesores/as</h1>
                <hr />
                <TeacherList />
            </Container>
        </>
    )
}
export default CoursePage



