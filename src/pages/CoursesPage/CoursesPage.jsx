import { Container } from "react-bootstrap"
import courseService from "../../services/courses.service"
import { useEffect, useState } from "react"
import CourseList from "../../components/CoursesList/CoursesList"
import TeacherList from "../../components/TeachersList/TeacherList"
import usersService from "../../services/users.service"

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

            <Container>
                <h1>Listado de profesores/as</h1>
                <hr />
                <TeacherList />
            </Container>
        </>
    )
}
export default CoursePage