import './Ratings.css'
import { Container, Row, Col, Spinner } from 'react-bootstrap'
import RatingCard from '../RatingCard/RatingCard'

const Comments = ({ ratings }) => {

    return (

        ratings
            ?
            <Container>
                {
                    ratings.map(rating => {
                        return
                        <RatingCard {...ratings} />
                    })
                }
            </Container >
            :
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
    )

}

export default Comments
