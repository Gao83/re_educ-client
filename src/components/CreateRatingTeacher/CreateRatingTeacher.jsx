import { useState } from "react"
import ratingService from "../../services/rating.service"
import { FaStar } from "react-icons/fa"
import { Button, Container, Form } from "react-bootstrap"
import { useNavigate } from "react-router-dom"

const CreateRatingTeacher = ({ id }) => {

    console.log(id)

    const [ratingCourseData, setRatingCourseData] = useState({
        content: '',
        rating: 0
    })
    const [hover, setHover] = useState(null)

    const navigate = useNavigate()
    const { content, rating } = ratingCourseData


    const handleInputChange = (e) => {
        const { name, value } = e.currentTarget
        setRatingCourseData({
            ...ratingCourseData,
            [name]: value
        })
    }

    const handleSubmit = (e) => {

        e.preventDefault()

        ratingService
            .createUserComment(id, ratingCourseData)
            .then(({ data }) => {
                setRatingCourseData(data)
                //navigate(`/cursos/${course_id}`)
            })
            .catch(err => console.log(err))
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
                    <Button variant="dark" type="submit" >Dejar Comentario </Button>
                </Form>
            </Container>
        </>

    )


}
export default CreateRatingTeacher