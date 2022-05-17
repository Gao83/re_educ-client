import React from "react";
import { loadStripe } from '@stripe/stripe-js'
import { Elements, CardElement } from '@stripe/react-stripe-js'
import { Form } from "react-bootstrap";
import  CheckoutForm from '../CheckoutForm/CheckoutFrom'

const stripePromise = loadStripe('pk_test_51L0NFIFxvlqzP3qT47MSUJa2ghKqFrQafg7Or2xnDtTtXTyaVDiOI2rmB8OGuTXKjvnvPOirsAPZSwfvjE6zOAtv00nlFS1Tw9')

function StripeContainer() {

    return (
        <Elements stripe={stripePromise}>
           <CheckoutForm/>
        </Elements>
    )
}


export default StripeContainer