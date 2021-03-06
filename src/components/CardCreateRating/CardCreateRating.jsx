
import { FaStar } from "react-icons/fa"
import "./CardCreateRating.css"
import { Button, Container, Form } from "react-bootstrap"
import { useState } from "react"


const CardCreateRating = ({ handleSubmit, handleInputChange, content, rating }) => {


    const [hover, setHover] = useState(null)


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
export default CardCreateRating