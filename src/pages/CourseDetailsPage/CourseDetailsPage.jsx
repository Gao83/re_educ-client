import { useEffect, useState } from "react"
import { Spinner } from "react-bootstrap"
import { useParams } from "react-router-dom"
import courseService from "../../services/courses.service"
const CourseDetailsPage = () => {

    const [courseDetail, setcourseDetails] = useState()

    useEffect(() => loadCourse(), [])

    const { course_id } = useParams()

    const loadCourse = () => {
        courseService
            .getOneCourse(course_id)
            .then(({ data }) => {
                setcourseDetails(data)
            })
            .catch(err => console.log(err))
    }
    return (
        courseDetail
            ?
            <>
                <h1>{courseDetail.title} </h1>
            </> :
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
    )
}
export default CourseDetailsPage