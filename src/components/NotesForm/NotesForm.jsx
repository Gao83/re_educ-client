import { useState } from "react"
import { Button, Container, Form } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import notesService from "../../services/notes.service"

const NotesForm = ({ course_id, fireFinalActions }) => {

    const [note, setNote] = useState({
        content: '',
        title: ''
    })
    const { content, title } = note
    const navigate = useNavigate()

    const handleInputChange = (e) => {
        const { name, value } = e.currentTarget
        setNote({
            ...note,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        notesService
            .createNotes(course_id, note)
            .then(({ data }) => {
                setNote(data)
                fireFinalActions()
            })
            .catch(err => console.log(err))
    }

    // const buttonActions = () => {
    //     closeModal()
    //     setUpdate(true)
    // }

    return (
        <>
            <Container>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="title">
                        <Form.Label>Inserta un título</Form.Label>
                        <Form.Control type="text" value={title} name='title' onChange={handleInputChange} rows={3} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="content">
                        <Form.Label>Tu nueva nota</Form.Label>
                        <Form.Control as="textarea" value={content} name='content' onChange={handleInputChange} rows={3} />
                    </Form.Group>
                    <Button variant="dark" type="submit" onClick={fireFinalActions} >Dejar Comentario </Button>
                </Form>
            </Container>
        </>

    )


}
export default NotesForm