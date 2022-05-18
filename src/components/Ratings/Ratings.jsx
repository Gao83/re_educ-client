import './Ratings.css'
import { Container } from 'react-bootstrap'
import RatingCard from '../RatingCard/RatingCard'
import { useEffect, useState } from "react"
import ratingService from '../../services/rating.service'

const Ratings = ({ course_id }) => {

    const [ratings, setRatings] = useState([])

    useEffect(() => loadRatings(), [course_id])

    const loadRatings = () => {
        ratingService
            .getAllComments(course_id)
            .then(({ data }) => {
                console.log(data)
                setRatings(data)
            })
            .catch(err => console.log(err))
    }

    return (

        ratings ?

            <Container >

                {
                    ratings.map(rating => {

                        return (
                            <RatingCard key={rating._id} {...rating} />
                        )

                    })
                }
            </Container>
            :
            <div></div>)

}

export default Ratings
