import { Container } from "react-bootstrap"
import CoursesForm from "../../components/CoursesForm/CoursesForm"

const NewCourse = () => {
    return (
        <>

            <Container>
                <h2>Crear nuevo curso</h2>
                <hr />
                <CoursesForm />
            </Container>
        </>

    )

}


export default NewCourse