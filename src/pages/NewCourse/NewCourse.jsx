import { Container } from "react-bootstrap"
import CoursesForm from "../../components/CoursesForm/CoursesForm"

const NewCourse = () => {
    return (
        <>

            <Container>
                <br />
                <h2>Por favor, rellene el formulario de creación de nuevos cursos de Re_educ</h2>
           
                <CoursesForm />
            </Container>
        </>

    )

}


export default NewCourse