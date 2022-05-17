import { useEffect, useState } from "react"
import coursesService from "../../services/courses.service"
import CourseCardSmall from "../CourseCardSmall/CourseCardSmall"
import Loader from "../Loader/Loader"
import Carousel from "react-elastic-carousel";

const CoursesByTeacher = ({ id }) => {

    const [coursesByTeacher, setCoursesByTeacher] = useState([])

    useEffect(() => {
        loadTeacherCourses()
    }, [])

    const loadTeacherCourses = () => {

        coursesService
            .getCoursesById(id)
            .then(({ data }) => {
                setCoursesByTeacher(data)
            })
            .catch(err => console.log(err))
    }
    const breakpoints = [
        { width: 400, itemsToShow: 1 },
        { width: 500, itemsToShow: 2 },
        { width: 720, itemsToShow: 4 },
        { width: 1200, itemsToShow: 6 },
        { width: 1500, itemsToShow: 8 }

    ]

    return (
        coursesByTeacher ?
            <>

                <Carousel breakPoints={breakpoints}>
                    {
                        coursesByTeacher.map(course => {
                            return (
                                <CourseCardSmall key={course._id} {...course} />
                            )
                        })
                    }

                </Carousel>
            </> :
            <Loader />

    )

}

export default CoursesByTeacher
