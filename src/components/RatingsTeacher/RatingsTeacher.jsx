import './RatingsTeacher.css'
import "./RatingsTeacher.css"
import RatingCard from '../RatingCard/RatingCard'
import Loader from '../Loader/Loader'


const RatingsTeachers = ({ teacherRatings }) => {

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
