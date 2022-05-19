import axios from 'axios'

class NotesService {

    constructor() {
        this.api = axios.create({ baseURL: `${process.env.REACT_APP_API_URL}/notes` })

        this.api.interceptors.request.use((config) => {

            const storedToken = localStorage.getItem("authToken");

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }

            return config
        })
    }
    createNotes = (course_id, data) => {
        return this.api.post(`/${course_id}/createNotes`, data)
    }
    getMyNotesByCourse = (course_id) => {
        return this.api.get(`/${course_id}/getMyNotesByCourse`)
    }
    deleteOneNote = (note_id) => {
        return this.api.put(`/${note_id}/delete`)
    }


}

const notesService = new NotesService()

export default notesService