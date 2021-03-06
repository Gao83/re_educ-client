import { Container } from "react-bootstrap"
import courseService from "../../services/courses.service"
import { useEffect, useState } from "react"
import CourseByRating from "../../components/CourseListByRating/CourseListByRating"
import CourseList from "../../components/CoursesList/CoursesList"
import TeacherList from "../../components/TeachersList/TeacherList"
import './CoursesPage.css'

const CoursePage = () => {

    const [coursesByRating, setCoursesByRating] = useState([])

    useEffect(() => {
        loadCoursesByRating()
    }, [])


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

                <h3>LOS MEJOR VALORADOS</h3>
                <div className="container-courses-page-h3"></div>
                <CourseByRating coursesByRating={coursesByRating} />

                <h3>LISTADO DE CURSOS</h3>
                <div className="container-courses-page-h3"></div>

                <CourseList />

                <h3>NUESTROS FORMADORES</h3>
                <div className="container-courses-page-h3"></div>
                <TeacherList />

            </div>
        </>
    )
}
export default CoursePage



