import CourseCardSmall from "../CourseCardSmall/CourseCardSmall"
import Loader from "../Loader/Loader"
import Carousel from "react-elastic-carousel";
import coursesService from "../../services/courses.service";
import { useState, useEffect } from 'react'
import { Link } from "react-router-dom";


const CoursesPaid = () => {

    const [coursesPaid, SetCoursesPaid] = useState([])

    useEffect(() => {

        loadCoursesPaid()
    }, [])

    const loadCoursesPaid = () => {

        coursesService
            .getCoursesPaidOut()
            .then(({ data }) => {
                SetCoursesPaid(data)
            })
            .then(err => console.log('error de cursos', err))
    }

    const breakpoints = [
        { width: 400, itemsToShow: 1 },
        { width: 500, itemsToShow: 2 },
        { width: 720, itemsToShow: 4 },
        { width: 1200, itemsToShow: 6 },
        { width: 1500, itemsToShow: 8 }

    ]

    return (
        coursesPaid ?
            <>

                <Carousel breakPoints={breakpoints}>

                    {
                        coursesPaid.map(eachCourse => {
                            return (
                                <Link to={`/cursos/${eachCourse._id}/media`}>
                                    <CourseCardSmall key={eachCourse._id} {...eachCourse} />
                                </Link>
                            )

                        })
                    }
                </Carousel>
            </> :
            <Loader />
    )
}
export default CoursesPaid