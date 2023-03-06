import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { getVideogames } from '../../redux/actions'
import { InputContainer } from './StylesSearchBar'
import { HiMagnifyingGlass } from 'react-icons/hi2'
import { useNavigate } from 'react-router-dom'

export const SearchBar = () => {

  const dispatch = useDispatch()
  const [name, setName] = useState(JSON.parse(localStorage.getItem('name')) || '')
  const navigate = useNavigate()

  const handleInput = (event) => {
    setName(event.target.value)
  }

  useEffect(() => {
    dispatch(getVideogames(name))
    localStorage.setItem('name', JSON.stringify(name))
    navigate('/home')
  }, [name])

  return (
    <InputContainer>
      <input className='searchInput' type="text" placeholder='Insert a name here...' onChange={handleInput} value={name} />
      <div className="btn">
        <HiMagnifyingGlass />
      </div>
    </InputContainer>
  )
}
