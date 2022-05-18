import axios from 'axios'

class PaymentService {

    constructor() {

        this.api = axios.create({ baseURL: `${process.env.REACT_APP_API_URL}/payment` })

        this.api.interceptors.request.use((config) => {

            const storedToken = localStorage.getItem("authToken");

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }

            return config
        })

    }


    createPaymentByCourse = (data) => {
        return this.api.post(`/create`, data)
    }

}

const paymentService = new PaymentService()

export default paymentService