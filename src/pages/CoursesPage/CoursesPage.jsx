import { Container } from "react-bootstrap"
import courseService from "../../services/courses.service"
import { useEffect, useState } from "react"
import CourseByRating from "../../components/CourseListByRating/CourseListByRating"
import CourseList from "../../components/CoursesList/CoursesList"
import TeacherList from "../../components/TeachersList/TeacherList"
import './CoursesPage.css'

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
            .catch(err => console.log(err))
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
            <div className="container-courses-page">

                <h4>Los mejor valorados</h4>
                <CourseByRating coursesByRating={coursesByRating} />

                <h4>Listado de cursos</h4>
                <CourseList courses={courses} />

                <h4>Listado de profesores/as</h4>
                <TeacherList />

            </div>
        </>
    )
}
export default CoursePage



