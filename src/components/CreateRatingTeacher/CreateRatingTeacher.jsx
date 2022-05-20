import { useEffect, useState } from "react"
import ratingService from "../../services/rating.service"
import { FaStar } from "react-icons/fa"
import { Button, Container, Form } from "react-bootstrap"
import { useNavigate } from "react-router-dom"

const CreateRatingTeacher = ({ id, closeModal, setUpdate, update }) => {


    const [ratingTeacherData, setRatingTeacherData] = useState({
        content: '',
        rating: 0
    })


    const { content, rating } = ratingTeacherData

    const [hover, setHover] = useState(null)

    const navigate = useNavigate()


    const handleInputChange = (e) => {
        const { name, value } = e.currentTarget
        setRatingTeacherData({
            ...ratingTeacherData,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        ratingService
            .createTeacherComment(id, ratingTeacherData)
            .then(({ data }) => {
                setRatingTeacherData(data)
                // navigate(`/perfil/${id}`)
            })
            .catch(err => console.log(err))

    }

    const buttonActions = () => {
        closeModal()
        setUpdate(!update)
    }
    const arrRating = [1, 2, 3, 4, 5]
    return (
        <>
            <Container>
                <Form onSubmit={handleSubmit}>
                    <div className="form-create-rating">

                        <Form.Group className="mb-3" controlId="rating">
                            {arrRating.map((start, idx) => {
                                const ratingValue = idx + 1
                                return (
                                    <label key={idx}>
                                        <input
                                            type="radio"
                                            value={ratingValue}
                                            name="rating"
                                            onChange={handleInputChange} />
                                        <FaStar className="start-rating"
                                            color={ratingValue <= (hover || rating) ? '#ffc107' : '#e4e5e9'}
                                            onMouseEnter={() => setHover(ratingValue)}
                                            onMouseLeave={() => setHover(null)}
                                        />
                                    </label>
                                )
                            })}
                        </Form.Group>
                    </div>
                    <Form.Group className="mb-3" controlId="content">
                        <Form.Label>Deja tu comentario</Form.Label>
                        <Form.Control as="textarea" value={content} name='content' onChange={handleInputChange} rows={3} />
                    </Form.Group>
                    <Button variant="dark" type="submit" onClick={buttonActions} >Dejar Comentario </Button>
                </Form>
            </Container>
        </>

    )


}
export default CreateRatingTeacher