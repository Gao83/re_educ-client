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
                        <div className="teacher-card-p">
                            <span id="username-teacher-card"><p>{username}</p></span>
                            <p>{interests}</p>
                            <div className="container-courses-page-teacher"></div>
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