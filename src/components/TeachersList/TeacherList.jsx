import { Col, Container } from "react-bootstrap"
import CourseCard from "../CourseCard/CourseCard"
import TeacherCard from "../TeacherCard/Teacher.Card"
import Loader from "../Loader/Loader"
import { useEffect, useState } from "react"
import usersService from "../../services/users.service"

const TeacherList = () => {

    const [teachers, setAllTeachers] = useState([])
    useEffect(() => loadTeachers(), [])

    const loadTeachers = () => {
        usersService
            .getAllTeachers()
            .then(({ data }) => {
                setAllTeachers(data)
            })
            .then(err => console.log(err))
    }


    return (
        teachers
            ?
            <Container>
                {
                    teachers.map(teacher => {
                        return (


                            <TeacherCard key={teacher?._id} {...teacher} />


                        )
                    })
                }

            </Container>
            :
            <Loader />
    )
}
export default TeacherList