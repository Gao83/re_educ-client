import { useState } from 'react'
import { Form, Button, Container } from 'react-bootstrap'
import './UserSignupDetailsForm.css'
import usersService from '../../services/users.service'
import uploadService from '../../services/upload.service'
import { useNavigate } from 'react-router-dom'

const UserSignupDetailsForm = ({ id}) => {

    const [imageForm, setImageForm] = useState()
    const [loadingImage, setLoadingImage] = useState(false)

    const handleImageUpload = e => {

        setLoadingImage(true)

        const formData = new FormData()
        formData.append('imageData', e.target.files[0])

        uploadService
            .uploadImage(formData)
            .then(({ data }) => {
                setLoadingImage(false)
                console.log(data)
                setImageForm({ ...imageForm, profileImg: data.cloudinary_url })
            })
            .catch(err => console.log(err))
    }

    const [signupDetailsForm, setSignupDetailsForm] = useState({
        interests: '',
        education: '',
        aboutMe: '',
        profileImg: ''
    })
     
    const handleInputChange = e => {
        const { name, value } = e.target
        setSignupDetailsForm({
            ...signupDetailsForm,
            [name]: value
        })
    }
    
    const navigate = useNavigate()
    
    function handleSubmit(e) {
        e.preventDefault()
        
        usersService
        .updateOneUser(id, signupDetailsForm)
        .then(({ data }) => {
            console.log(data)
            setSignupDetailsForm(data)
            navigate('/')
        })
        .catch(err => console.log(err))
    }

    const { interests, aboutMe, education, profileImg } = signupDetailsForm

    return (

        <Container className="signup-form">
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="interests">
                    <Form.Label className="form-label">Intereses</Form.Label>
                    <Form.Select className="form-select" aria-label="Default select example" onChange={handleInputChange} value={interests} name='interests' >
                        <option value="Lenguajes de programación">Lenguajes de programación</option>
                        <option value="Diseño de interfaces">Diseño de interfaces</option>
                        <option value="Fundamentos de marketing">Fundamentos de marketing</option>
                        <option value="Criptomonedas y Blockchain">Criptomonedas y Blockchain</option>
                        <option value="Salud Mental">Salud Mental</option>
                        <option value="Deportes">Deportes</option>
                        <option value="Otros">Otros</option>
                    </Form.Select>
                </Form.Group >

                <Form.Group className="mb-3" controlId="aboutMe">
                    <Form.Label>Sobre Mí</Form.Label>
                    <Form.Control as="textarea" value={aboutMe} name='aboutMe' onChange={handleInputChange} rows={3} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="interests">
                    <Form.Label>Educación</Form.Label>
                    <Form.Select aria-label="Default select example" onChange={handleInputChange} name='education' >
                        <option value="Bachillerato">Bachillerato</option>
                        <option value="Formación Profesional">Formación Profesional</option>
                        <option value="Grado Universitario">Grado Universitario</option>
                        <option value="Enseñanzas de régimen especial">Enseñanzas de régimen especial</option>
                        <option value="otros">Otros</option>
                    </Form.Select>
                </Form.Group >

                <Form.Group className="mb-3" controlId="profileImg">
                    <Form.Label>Foto de perfil</Form.Label>
                    <Form.Control type="file" value={profileImg} onChange={handleImageUpload}  />
                </Form.Group >
                <Button className="edit-button" variant="dark" type="submit" disabled={loadingImage}>Completar perfil</Button>
            </Form>
        </Container>

        // { loadingImage ? 'Cargando imagen...' : 'Completar perfil' }
    )
}

export default UserSignupDetailsForm