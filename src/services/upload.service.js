import axios from 'axios'

class UploadService {

    constructor() {

        this.api = axios.create({ baseURL: `${process.env.REACT_APP_API_URL}/upload` })

        this.api.interceptors.request.use((config) => {

            const storedToken = localStorage.getItem("authToken")

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }
            return config
        })
    }

    uploadImage(imageForm) {
        return this.api.post('/image', imageForm)
    }
    uploadVideo(videoForm) {
        return this.api.post('/video', videoForm)
    }
}

const uploadService = new UploadService()

export default uploadService