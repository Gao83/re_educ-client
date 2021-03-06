import axios from 'axios'

class UsersService {

    constructor() {
        this.api = axios.create({ baseURL: `${process.env.REACT_APP_API_URL}/profile` })

        this.api.interceptors.request.use((config) => {

            const storedToken = localStorage.getItem("authToken");

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }

            return config
        })
    }

    getAllUsers = () => {
        return this.api.get('/list')
    }

    getAllStudents = () => {
        return this.api.get('/student')
    }

    getAllTeachers = () => {
        return this.api.get('/teacher')
    }

    getOneUser = (id) => {
        return this.api.get(`/details/${id}`)
    }

    updateOneUser = (id, userData) => {
        return this.api.post(`/edit/${id}`, userData)
    }

    updateImage = (id, img) => {
        return this.api.post(`/edit/${id}/image`, img)
    }

    deleteUser = (id) => {
        return this.api.post(`/delete/${id}`)
    }

    getAllTeacherRatings = (id) => {
        return this.api.get(`/getRatingsTeacher/${id}`)
    }

}

const usersService = new UsersService()
export default usersService