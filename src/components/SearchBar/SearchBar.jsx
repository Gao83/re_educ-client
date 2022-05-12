import {  Button } from 'react-bootstrap'
import { useState } from 'react'
import coursesService from '../../services/courses.service'
import './SearchBar.css'
import { Link } from 'react-router-dom'

//falta el boton tiene que ir a la lista de los cursos con los nombres filtrados 

const SearchBar = () => {

    const [searchByInput, setSearchbyInput] = useState([])


    const handleByInput = e => {

        if (e.target.value === '') {
            setSearchbyInput([])
        } else {
            coursesService
                .filterBySearch(e.target.value)
                .then(({ data }) => {
                    setSearchbyInput(data)
                })
                .catch(err => console.log(err))
        }
    }

    console.log(searchByInput)

    return (
        <div>
            <div className='searchbar'>
                <input type="text" placeholder='Busca un curso' onChange={handleByInput} />
                <Link to={`/cursos/:search`}>
                    <Button className='button'>Search</Button>
                </Link>
            </div>

            <div>

                {
                    searchByInput.length !== 0 && (
                        <div className='desplegable'>
                            {
                                searchByInput.map(course => {
                                    return <Link key={course?._id} to={`/cursos/${course.title}`}>
                                        <p key={course._id}><img src={course.courseImg} alt="" />{course.title}</p>
                                    </Link>
                                })
                            }
                        </div>)
                }

            </div>
        </div >

    )
}

export default SearchBar