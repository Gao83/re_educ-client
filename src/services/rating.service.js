import axios from 'axios'

class RatingService {

    constructor() {
        this.api = axios.create({ baseURL: `${process.env.REACT_APP_API_URL}/rating` })

        this.api.interceptors.request.use((config) => {

            const storedToken = localStorage.getItem("authToken");

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }

            return config
        })
    }

    createUserComment = (course) => {
        return this.api.post(`/course/${course}/create-comment`)
    }


    createTeacherComment = (teacher) => {
        return this.api.post(`/teacher/${teacher}/create-comment`)
    }
}

const ratingService = new RatingService()

export default ratingService