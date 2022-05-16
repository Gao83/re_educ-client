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


    getAllComments = (course_id) => {
        return this.api.get(`/comments/${course_id}`)
    }

    createUserComment = (course, ratingData) => {
        return this.api.post(`/course/${course}/create-comment`, ratingData)
    }

    updateOneUserComment = (id, userData) => {
        return this.api.post(`/course/edit-comment/${id}`, userData)
    }

    deleteOneUserComment = (id) => {
        return this.api.post(`/course/delete/${id}`)
    }

    createTeacherComment = (teacher) => {
        return this.api.post(`/teacher/${teacher}/create-comment`)
    }


    updateOneTeacherComment = (id, userData) => {
        return this.api.post(`/teacher/edit-comment/${id}`, userData)
    }

    deleteOneTeacherComment = (id) => {
        return this.api.post(`/teacher/delete/${id}`)
    }
}

const ratingService = new RatingService()

export default ratingService