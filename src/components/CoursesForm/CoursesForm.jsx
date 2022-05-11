import { useState } from "react"
import { Button, Container, Form } from "react-bootstrap"

const CoursesForm = () => {

    const [courseData, setCourseData] = useState({
        title: '',
        img: '',
        headline: '',
        description: '',
        requirements: '',
        content: '',
        duration: '',
        isPaid: false,
        price: 0,
        category: ''
    })
    const { title, img, headline, description, requirements, content, duration, isPaid, price, category } = courseData
    return (
        <Container>
            <Form>

                <Form.Group className="mb-3" controlId="title">
                    <Form.Label>Titulo del Curso</Form.Label>
                    <Form.Control type="text" value={title} />
                </Form.Group >
                {/* INCLUIR IMAGENES PARA EL CURSOO */}
                <Form.Group className="mb-3" controlId="headline">
                    <Form.Label>Encabezado</Form.Label>
                    <Form.Control type="text" />
                </Form.Group >
                <Form.Group className="mb-3" controlId="requirements">
                    <Form.Label>Requisitos</Form.Label>
                    <Form.Control type="text" />
                </Form.Group >
                <Form.Group className="mb-3" controlId="content">
                    <Form.Label>Contenido del curso</Form.Label>
                    <Form.Control type="text" />
                </Form.Group >
                <Form.Group className="mb-3" controlId="duration">
                    <Form.Label>Duración</Form.Label>
                    <Form.Control type="text" />
                </Form.Group >

                <Form.Group className="mb-3" controlId="isPaid">
                    <Form.Check label="Marca si es de pago?" />
                </Form.Group >

                <Form.Group className="mb-3" controlId="price">
                    <Form.Label>Precio</Form.Label>
                    <Form.Control type="number" />
                </Form.Group >

                <Form.Group className="mb-3" controlId="category" >
                    <Form.Label>Elije Categoría</Form.Label>
                    <br />
                    <Form.Check name="category" label="Técnología" inline type="radio" />
                    <Form.Check name="category" label="Diseño" inline type="radio" />
                    <Form.Check name="category" label="Marketing" inline type="radio" />
                    <Form.Check name="category" label="Informática y Software" inline type="radio" />
                    <Form.Check name="category" label="Música" inline type="radio" />
                    <Form.Check name="category" label="Salud y Fitness" inline type="radio" />
                    <Form.Check name="category" label="Otros" inline type="radio" />
                </Form.Group >
                <Button variant="dark" type="submit">Crear nuevo curso</Button>
            </Form>
        </Container>
    )

}
// name = "firstName" value = { signupForm.firstName } onChange = { handleInputChange }

export default CoursesForm