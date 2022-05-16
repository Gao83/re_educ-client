import { useState } from "react"
import { Button, Col, Container, Form, Row } from "react-bootstrap"
import courseServices from "../../services/courses.service"
import uploadService from "../../services/upload.service"

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
        courseImg: ''
    })

    const [loadingImage, setLoadingImage] = useState(false)

    const { title, headline, description, requirements, content, duration, price, courseImg } = courseData

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

    const handleImageUpload = (e) => {

        setLoadingImage(true)

        const uploadData = new FormData()
        // for (let i = 0; i < e.target.files.length; i++)
            uploadData.append('imageData', e.target.files[0])

        uploadService
            .uploadImage(uploadData)
            .then(({ data }) => {
                setCourseData({ ...courseData, courseImg: data.cloudinary_urls })
                setLoadingImage(false)
            })
            .catch(err => console.log(err))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        courseServices
            .createOneCourse({ title, headline, description, requirements, content, duration, price, courseImg })
            .then(response => {
                console.log(response)
            })
            .catch(err => console.log(err))

    }

    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <Row className="mb-3">
                    <Form.Group as={Col} className="mb-3" controlId="title">
                        <Form.Label>Titulo del Curso</Form.Label>
                        <Form.Control type="text" value={title} onChange={handleInputChange} name='title' />
                    </Form.Group >

                    <Form.Group as={Col} className="mb-3" controlId="courseImg">
                        <Form.Label>Selecciona una imagen</Form.Label>
                        <Form.Control type="file" onChange={handleImageUpload}  />
                    </Form.Group >
                </Row>
                <Form.Group className="mb-3" controlId="headline">
                    <Form.Label>Encabezado</Form.Label>
                    <Form.Control type="text" value={headline} onChange={handleInputChange} name='headline' />
                </Form.Group >

                <Form.Group className="mb-3" controlId="description">
                    <Form.Label>Descripción</Form.Label>
                    <Form.Control type="text" value={description} onChange={handleInputChange} name='description' />
                </Form.Group >

                <Form.Group className="mb-3" controlId="requirements">
                    <Form.Label>Requisitos</Form.Label>
                    <Form.Control type="text" value={requirements} onChange={handleInputChange} name='requirements' />
                </Form.Group >

                <Form.Group className="mb-3" controlId="content">
                    <Form.Label>Contenido del curso</Form.Label>
                    <Form.Control type="text" value={content} onChange={handleInputChange} name='content' />
                </Form.Group >
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
                            <option value="tecnologia">Técnología</option>
                            <option value="diseno">Diseño</option>
                            <option value="marketing">Marketing</option>
                            <option value="informatica-y-software">Informática y Software</option>
                            <option value="musica">Música</option>
                            <option value="salud-y-fitness">Salud y Fitness</option>
                            <option value="otros">Otros</option>
                        </Form.Select>
                    </Form.Group>
                </Row>

                <Button variant="dark" type="submit" disabled={loadingImage}>{loadingImage ? 'Cargando imagen...' : 'Crear nuevo curso'} </Button>
            </Form>
        </Container>
    )

}

export default CoursesForm