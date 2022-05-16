import { useState } from 'react'
import coursesService from '../../services/courses.service'
import './SearchBar.css'
import { Link } from 'react-router-dom'

//falta el boton tiene que ir a la lista de los cursos con los nombres filtrados???

const SearchBar = () => {

    const [searchByInput, setSearchbyInput] = useState([])
    const [searchStr, setSearchStr] = useState('')

    const handleByInput = e => {

        if (e.target.value === '') {
            resetFilter()
        } else {
            setSearchStr(e.target.value)
            coursesService
                .filterBySearch(e.target.value)
                .then(({ data }) => {
                    setSearchbyInput(data)
                })
                .catch(err => console.log(err))
        }
    }

    const resetFilter = () => {
        setSearchbyInput([])
        setSearchStr('')
    }

    return (
        <div>
            <div className='searchbar'>
                <input type="text" placeholder='Busca un curso' onChange={handleByInput} value={searchStr} />
            </div>
            <div>
                {
                    searchByInput.length !== 0 && (
                        <div id='dropdown'>
                            {
                                searchByInput.map(course => {
                                    return (        // search result
                                        <Link key={course?._id} to={`/cursos/${course._id}`} onClick={resetFilter}>
                                            <p key={course._id}><img src={course.courseImg} alt="" />{course.title}</p>
                                        </Link>
                                    )
                                })
                            }
                        </div>
                    )
                }
            </div>
        </div >
    )
}

export default SearchBar