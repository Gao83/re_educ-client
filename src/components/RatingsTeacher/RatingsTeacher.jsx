import { Container } from 'react-bootstrap'
import RatingCard from '../RatingCard/RatingCard'
import { useEffect, useState } from "react"
import usersService from '../../services/users.service'
import { useParams } from 'react-router-dom'

const RatingsTeachers = () => {

    const [teacherRatings, setTeacherRatings] = useState({})

    const { id } = useParams()

    useEffect(() => loadRatingsTeacher(), [])


    const loadRatingsTeacher = () => {
        usersService
            .getAllTeacherRatings(id)
            .then(({ data }) => {

                setTeacherRatings(data)
            })
            .catch(err => console.log(err))
    }
   
    return (

        teacherRatings ?

            <Container >

                <h1>Valoraciones de Profe</h1>
                <hr />
                {
                    <p>{teacherRatings.avgRating}</p>   

                }
            </Container>
            :
            <div></div>)
}

export default RatingsTeachers
