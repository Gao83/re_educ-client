import { useEffect, useState } from "react"
import { Container, Nav, Navbar, Modal } from "react-bootstrap"
import { Link, useParams } from "react-router-dom"
import CreateRating from "../../components/CreateRating/CreateRating"
import Loader from "../../components/Loader/Loader"
import coursesService from "../../services/courses.service"
import './CourseMedia.css'


const CourseMedia = () => {
    const [showModal, setShowModal] = useState(false)
    const openModal = () => setShowModal(true)
    const closeModal = () => setShowModal(false)


    const { course_id } = useParams()


    const [mediaCourse, setMediaCourse] = useState({})
    const { courseVideo, title } = mediaCourse
    console.log(course_id)
    useEffect(() => {
        loadOneCourse()
    }, [])
    const loadOneCourse = () => {
        coursesService
            .getOneCourse(course_id)
            .then(({ data }) => {
                setMediaCourse(data)
            })
            .catch(err => console.log(err))
    }

    return (
        mediaCourse ?
            <div>
                <h1>{title}</h1>
                <video src={courseVideo} width="720" height="550" controls>
                    Your browser does not support the video tag.
                </video>

                <Navbar bg="dark" expand="lg" className="navbar-courseMedia">
                    <Container>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto ">
                                <Link className="link-comments" onClick={openModal} to='#'>Valorar el curso</Link>
                                <Link className="link-comments" to="#link">Dejar pregunta</Link>
                                <Modal show={showModal} onHide={closeModal}>
                                    <Modal.Body>
                                        <CreateRating />
                                    </Modal.Body>
                                </Modal>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div> :
            <Loader />

    )

}
export default CourseMedia