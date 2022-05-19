import { Card, Col, Container, Row, Carousel } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from "@fortawesome/free-solid-svg-icons"
import './TeacherCard.css'
import { Link } from "react-router-dom"

const TeacherCard = ({ username, profileImg, _id, interests }) => {



    return (
        <>
            <Link to={`/perfil/${_id}`} style={{ textDecoration: 'none', color: "black" }}>
                <div className="teacher-card-container">
                    <div className="teacher-card-img" >
                        <img src={profileImg}></img>
                        <div clasName="teacher-card-p">
                            <p>{username}</p>
                            <p>{interests}</p>
                        </div>
                    </div>
                    <div>

                    </div>

                </div>




            </Link>
        </>
    )
}
export default TeacherCard