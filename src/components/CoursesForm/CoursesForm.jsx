import { useState } from "react"
import { Button, Col, Container, Form, Row } from "react-bootstrap"
import courseServices from "../../services/courses.service"
import uploadService from "../../services/upload.service"
import './CoursesForm.css'
import { useNavigate } from 'react-router-dom'



const CoursesForm = () => {
    const [isPaid, setIsPaid] = useState(false)
    const [courseData, setCourseData] = useState({
        title: '',
        headline: '',
        description: '',
        requirements: '',
        content: '',
        duration: '',
        price: 0,
        category: '',
        courseImg: '',
        courseVideo: ''
    })

    const { title, headline, description, requirements, content, duration, price, courseImg, courseVideo } = courseData
    const [loadingImage, setLoadingImage] = useState(false)
    const [loadingVideo, setLoadingVideo] = useState(false)

    const handleInputChange = (e) => {
        const { name, value } = e.currentTarget
        setCourseData({
            ...courseData,
            [name]: value
        })
    }


    const handleIsPaidInput = (e) => {
        setIsPaid(e.target.checked)
    }


    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        courseServices
            .createOneCourse(courseData)
            .then(response => {
                console.log(response)
                navigate('/perfil')
            })
            .catch(err => console.log(err))
    }

    const handleImageUpload = (e) => {
        setLoadingImage(true)
        const uploadData = new FormData()
        uploadData.append('imageData', e.target.files[0])
        uploadService
            .uploadImage(uploadData)
            .then(({ data }) => {
                setLoadingImage(false)
                setCourseData({ ...courseData, courseImg: data.cloudinary_url })
            })
            .catch(err => console.log(err))
    }

    const handleVideoUpload = (e) => {
        setLoadingVideo(true)
        const uploadData = new FormData()
        uploadData.append('videoFile', e.target.files[0])
        uploadService
            .uploadVideo(uploadData)
            .then(({ data }) => {
                setLoadingVideo(false)
                setCourseData({ ...courseData, courseVideo: data.cloudinary_url })
            })
            .catch(err => console.log(err))
    }

    return (
        <Container>
            <div className="course-form">
                <Form onSubmit={handleSubmit}>
                    <Row className="mb-3">
                        <Form.Group as={Col} className="mb-3" controlId="title">
                            <Form.Label>Título del Curso</Form.Label>
                            <Form.Control type="text" value={title} onChange={handleInputChange} name='title' />
                        </Form.Group >
                        <Form.Group as={Col} className="mb-3" controlId="headline">
                            <Form.Label>Encabezado</Form.Label>
                            <Form.Control type="text" value={headline} onChange={handleInputChange} name='headline' />
                        </Form.Group >
                    </Row>
                    <Form.Group className="mb-3" controlId="description">
                        <Form.Label>Descripción</Form.Label>
                        <Form.Control as="textarea" type="text" value={description} onChange={handleInputChange} name='description' />
                    </Form.Group >
                    <Row className="mb-3">

                        <Form.Group as={Col} className="mb-3" controlId="requirements">
                            <Form.Label>Requisitos</Form.Label>
                            <Form.Control type="text" value={requirements} onChange={handleInputChange} name='requirements' />
                        </Form.Group >
                    </Row>
                    <Form.Group className="mb-3" controlId="content">
                        <Form.Label>Contenido del curso</Form.Label>
                        <Form.Control as="textarea" type="text" value={content} onChange={handleInputChange} name='content' />
                    </Form.Group >
                    <Row className="mb-3">
                        <Form.Group as={Col} className="mb-3" controlId="courseImg">
                            <Form.Label>Selecciona una imagen de portada del curso</Form.Label>
                            <Form.Control type="file" onChange={handleImageUpload} />
                        </Form.Group >
                        <Form.Group as={Col} className="mb-3" controlId="courseVideo">
                            <Form.Label>Selecciona el contenido audiovisual del curso</Form.Label>
                            <Form.Control type="file" onChange={handleVideoUpload} />
                        </Form.Group >
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} className="mb-3" controlId="duration">
                            <Form.Label>Duración</Form.Label>
                            <Form.Control type="text" value={duration} onChange={handleInputChange} name='duration' />
                        </Form.Group >
                        <Form.Group as={Col} className="mb-3" controlId="ispaid">
                            <Form.Label>Marca si es de pago</Form.Label>
                            <br />
                            <Form.Check type="checkbox" checked={isPaid} onChange={handleIsPaidInput} name="isPaid" />
                        </Form.Group >
                        <Form.Group as={Col} className="mb-3" controlId="price">
                            <Form.Label>Precio</Form.Label>
                            <Form.Control type="number" value={price} onChange={handleInputChange} name='price' />
                        </Form.Group >
                        <Form.Group as={Col}>
                            <Form.Label>Elige Categoría</Form.Label>
                            <Form.Select aria-label="Default select example" onChange={handleInputChange} name='category' >
                                <option value="tecnologia">Tecnología</option>
                                <option value="diseno">Diseño</option>
                                <option value="marketing">Marketing</option>
                                <option value="informatica-y-software">Informática y Software</option>
                                <option value="musica">Música</option>
                                <option value="salud-y-fitness">Salud y Fitness</option>
                                <option value="otros">Otros</option>
                            </Form.Select>
                        </Form.Group>
                    </Row>
                    <Button id="btn-payment" variant="dark" type="submit" disabled={loadingImage || loadingVideo}>{loadingImage || loadingVideo ? 'Cargando...' : 'Crear nuevo curso'} </Button>
                </Form>
            </div>
        </Container>
    )
}
export default CoursesForm