import { Card, Container } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from "@fortawesome/free-solid-svg-icons"
import "./RatingCard.css"
const RatingCard = ({ content, rating, owner }) => {

    return (

        <div className="rating-card">
            <div className="rating-card-header">
                <img src={owner?.profileImg} />
                <h4>{owner?.username}</h4>

            </div>
            <div className="rating-card-footer">
                <p>{content}</p>
                <p>Valoración: {rating}</p>
            </div>

        </div >

    )
}
export default RatingCard