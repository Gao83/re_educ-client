import { loadStripe } from "@stripe/stripe-js"
import axios from "axios"
const stripePromise = loadStripe("pk_test_51L0NFIFxvlqzP3qT47MSUJa2ghKqFrQafg7Or2xnDtTtXTyaVDiOI2rmB8OGuTXKjvnvPOirsAPZSwfvjE6zOAtv00nlFS1Tw9")
class StripeService {

    constructor() {
        this.api = axios.create({ baseURL: `${process.env.REACT_APP_API_URL}` })


    }
    checkout = (id, amount) => {
        return this.api.post("/checkout", id, amount)
    }



}

const stripeService = new StripeService()

export default stripeService