import { useState } from 'react'
import coursesService from '../../services/courses.service'
import './SearchBar.css'
import { Link, useNavigate } from 'react-router-dom'

const SearchBar = () => {

    const [searchByInput, setSearchbyInput] = useState([]);
    const [searchStr, setSearchStr] = useState('');
    const navigate = useNavigate();

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

    const handleKeyPress = e => {
        if (e.key === 'Enter') {
            e.preventDefault();
            navigate(`/search?q=${searchStr}`)
            setSearchbyInput([])
            setSearchStr('')
        }

    }

    return (
        <div>
            <div className='searchbar'>
                <input
                    type="text"
                    placeholder='Busca un curso'
                    onChange={handleByInput}
                    onKeyDown={handleKeyPress}

                    value={searchStr} />
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