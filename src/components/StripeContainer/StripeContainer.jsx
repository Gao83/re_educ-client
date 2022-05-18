import React, { useEffect, useState } from "react";
import { loadStripe } from '@stripe/stripe-js'
import { Elements, CardElement } from '@stripe/react-stripe-js'
import { Form } from "react-bootstrap";
import CheckoutForm from '../CheckoutForm/CheckoutFrom'
import { useParams } from "react-router-dom";
import coursesService from "../../services/courses.service";

const stripePromise = loadStripe('pk_test_51L0NFIFxvlqzP3qT47MSUJa2ghKqFrQafg7Or2xnDtTtXTyaVDiOI2rmB8OGuTXKjvnvPOirsAPZSwfvjE6zOAtv00nlFS1Tw9')

function StripeContainer() {

    const { course_id } = useParams()

    const [oneCourse, setOneCourse] = useState({})
    
    const { _id, price } = oneCourse

    useEffect(() => {
        loadOneCourse()
    }, [])

    const loadOneCourse = () => {
        coursesService
            .getOneCourse(course_id)
            .then(({ data }) => {
                setOneCourse(data)
            })
            .catch(err => console.log(err))
    }

    return (
        <Elements stripe={stripePromise}>
            <CheckoutForm
                _id={_id}
                price={price}
            />
        </Elements>
    )
}


export default StripeContainer