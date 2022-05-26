import Loader from "../Loader/Loader"
import { useEffect, useState } from "react";
import notesService from "../../services/notes.service";
import NotesForm from "../../components/NotesForm/NotesForm"
import CardNotes from "../CardNotes/CardNotes";
import { Link } from "react-router-dom";
import { Badge, Container, ListGroup, Modal } from "react-bootstrap";
import './NotesList.css'

const NotesList = ({ course_id, update, setUpdate }) => {

    const [showModal, setShowModal] = useState(false)
    const [notesList, setNotesList] = useState()
    const openModal = () => setShowModal(true)
    const closeModal = () => setShowModal(false)


    useEffect(() => loadNotesPerUser(), [update])

    const loadNotesPerUser = () => {
        notesService
            .getMyNotesByCourse(course_id)
            .then(({ data }) => {
                setNotesList(data)
            })
            .catch(err => console.log(err))
    }
    return (
        notesList ?
            <>
                <ListGroup as="ol" >

                    {
                        notesList.map(note => {
                            return (
                                <ListGroup.Item key={note._id}
                                    as="li"
                                    className="d-flex justify-content-between align-items-start"
                                >
                                    <div className="ms-2 me-auto">
                                        <div className="fw-bold">{note.title}</div>
                                        {note.content}
                                    </div>
                                </ListGroup.Item>
                            )
                        })
                    }

                </ListGroup>
                <Container>

                    <Link className="new-note-link" onClick={openModal} to='#'>Crear Nueva Nota</Link>
                    <Modal show={showModal} onHide={closeModal}>
                        <Modal.Body>
                            <NotesForm
                                course_id={course_id}
                                setUpdate={setUpdate}
                                closeModal={closeModal}
                            />
                        </Modal.Body>
                    </Modal>
                </Container>
            </> : <Loader />






    )

}
export default NotesList