import './RatingsTeacher.css'
import { useEffect, useState } from "react"
import "./RatingsTeacher.css"
import RatingCard from '../RatingCard/RatingCard'
import Loader from '../Loader/Loader'
import ratingService from '../../services/rating.service'



const RatingsTeachers = ({ id, setUpdate, update }) => {
    const [teacherRatings, setTeacherRatings] = useState()

    useEffect(() => {
        loadRatingTeachers()
    }, [update])

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
