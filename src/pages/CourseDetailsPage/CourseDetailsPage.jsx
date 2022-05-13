import { useEffect, useState } from "react"
import { Spinner } from "react-bootstrap"
import { useParams } from "react-router-dom"
import Ratings from "../../components/Ratings/Ratings"
import courseService from "../../services/courses.service"
const CourseDetailsPage = () => {

    const [courseDetail, setcourseDetails] = useState()

    const { course_id } = useParams()

    useEffect(() => loadCourse(), [course_id])


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
                <h1>{courseDetail.description} </h1>
                <Ratings course_id={course_id} />
            </> :
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
    )
}
export default CourseDetailsPage