import { useEffect, useState } from "react"
import { Container, Nav, Navbar, Modal, Col, Row, Button } from "react-bootstrap"
import { Link, useParams } from "react-router-dom"
import CreateRatingCourse from "../../components/CreateRatingCourse/CreateRatingCourse"
import Loader from "../../components/Loader/Loader"
import NotesList from "../../components/NotesList/NotesList.jsx"
import coursesService from "../../services/courses.service"
import './CourseMedia.css'


const CourseMedia = () => {
    const [showModal, setShowModal] = useState(false)
    const [showMore, setShowMore] = useState(false);
    const [update, setUpdate] = useState(false)
    const openModal = () => setShowModal(true)
    const closeModal = () => setShowModal(false)

    const { course_id } = useParams()

    const [mediaCourse, setMediaCourse] = useState({})
    const { courseVideo, title } = mediaCourse

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
            <>
                <Container className="container-media">
                    <Row>
                        <h1>{title}</h1>
                        <Col className="video-box" md={{ span: 8 }}>
                            <video src={courseVideo} width="750" height="450" controls >
                                Your browser does not support the video tag.
                            </video>

                            <Navbar bg="dark" expand="lg" className="navbar-courseMedia">
                                <Container>
                                    <Navbar.Collapse id="basic-navbar-nav">
                                        <Nav className="me-auto ">
                                            <Link className="link-comments" onClick={openModal} to='#'>Valorar el curso</Link>
                                            <Modal show={showModal} onHide={closeModal}>
                                                <Modal.Body>
                                                    <CreateRatingCourse />
                                                </Modal.Body>
                                            </Modal>
                                        </Nav>
                                    </Navbar.Collapse>
                                </Container>
                            </Navbar>
                        </Col>
                        <Col md={{ span: 4 }} className="list-videos">
                            <Button id="btn-see-more-video" onClick={() => setShowMore(!showMore)}>{showMore ? "Contenido" : <h5>Vídeo 1</h5>}</Button>
                        </Col>

                        <NotesList
                            course_id={course_id}
                            update={update}
                            setUpdate={setUpdate}
                        />

                    </Row>
                </Container>
            </>
            :
            <Loader />

    )

}
export default CourseMedia