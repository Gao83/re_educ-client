import axios from 'axios'

class CoursesService {

    constructor() {
        this.api = axios.create({ baseURL: `${process.env.REACT_APP_API_URL}/courses` })

        this.api.interceptors.request.use((config) => {
            const storedToken = localStorage.getItem("authToken");
            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }

            return config
        })
    }

    createOneCourse = (data) => {
        return this.api.post('/create', data)
    }

    getAllCourses = () => {
        return this.api.get('/getAllCourses')
    }

    getOneCourse = (id) => {
        return this.api.get(`/getOneCourse/${id}`)
    }

    updateOneCourse = (id, courseData) => {
        return this.api.post(`/edit/${id}`, courseData)
    }

    deleteOneCourse = (id) => {
        return this.api.post(`/delete/${id}`)
    }

    filterByCategory = (category) => {
        return this.api.get(`/filter/${category}`)
    }

    filterBySearch = (search) => {
        return this.api.get(`/filter-courses/${search}`)
    }
    filterByRating = () => {
        return this.api.get(`/coursesOrderedByRating`)
    }

    getCoursesListByUser = () => {
        return this.api.get(`/coursesListByUser`)
    }

    getCoursesById = (id) => {
        return this.api.get(`/getCoursesById/${id}`)
    }
    getCoursesPaidOut = () => {
        return this.api.get(`/coursesCurrentUser`)
    }
}


const coursesService = new CoursesService()

export default coursesService