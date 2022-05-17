import { Button, Col, Container, Row } from 'react-bootstrap'
import './RatingsTeacher.css'
import { useEffect, useState } from "react"
import "./RatingsTeacher.css"
import RatingCard from '../RatingCard/RatingCard'
import Loader from '../Loader/Loader'
import ratingService from '../../services/rating.service'
import { useParams } from 'react-router-dom'



const RatingsTeachers = ({ id }) => {
    const [teacherRatings, setTeacherRatings] = useState([])

    useEffect(() => loadRatingTeachers(), [])

 
    const loadRatingTeachers = () => {
        ratingService
            .getTeacherComments(id)
            .then(({ data }) => {

                setTeacherRatings(data)
            })
            .catch(err => console.log(err))
    }
    return (


        teacherRatings ?
            <>
                {
                    teacherRatings.map(rating => {
                        return (
                            <RatingCard key={rating?._id}  {...rating} />
                        )
                    })
                }
            </> :
            <Loader />

    )

}

export default RatingsTeachers
