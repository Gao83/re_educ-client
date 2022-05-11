import axios from 'axios'

class ResponseService {

    constructor() {
        this.api = axios.create({ baseURL: `${process.env.REACT_APP_API_URL}/response` })

        this.api.interceptors.request.use((config) => {

            const storedToken = localStorage.getItem("authToken");

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }

            return config
        })
    }

    createUserComment = (comment) => {
        return this.api.post(`/course/${comment}/response`)
    }


    createTeacherComment = (comment) => {
        return this.api.post(`/teacher/${comment}/response`)
    }
}

const responseService = new responseService()

export default ResponseService