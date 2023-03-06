import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addVideogame, setModalClose } from '../../redux/actions'
import { ComponentContainer, FormContainer, BackButtonContainer, InputContainer, SubmitButtonContainer, FormMain, SelectedGenresContainer, GenreSpan } from './StylesForm'
import { RxCross2 } from 'react-icons/rx'
import { formValidation } from '../../helpers/formValidation'

export const Form = () => {

  const { genres } = useSelector(state => state)
  const dispatch = useDispatch()

  const [form, setForm] = useState({
    name: '',
    description: '',
    platforms: '',
    image: '',
    released: '',
    rating: '',
    genres: ''
  })
  const [errors, setErrors] = useState({
    name: '',
    description: '',
    platforms: '',
    image: '',
    released: '',
    rating: '',
    genres: ''
  })

  const handleInputChange = (event) => {
    const { name, value } = event.target
    if (name === 'genres') {
      setForm({
        ...form,
        genres: typeof form.genres === 'string' ? [...form.genres, value] : form.genres.some(genre => genre === value) ? [...form.genres] : [...form.genres, value]
      })
      setErrors(
        formValidation({
          ...form,
          genres: typeof form.genres === 'string' ? [...form.genres, value] : form.genres.some(genre => genre === value) ? [...form.genres] : [...form.genres, value]
        })
      )
      return
    }
    setForm({
      ...form,
      [name]: value
    })
    setErrors(
      formValidation({
        ...form,
        [name]: value
      })
    )
  }

  const onSubmit = (event) => {
    event.preventDefault()
    const newVideogame = {
      ...form,
      platforms: form.platforms.split(',').map(platform => platform.trim()),
      rating: Number(form.rating),
      genres: form.genres.map(genre => {
        for (let i = 0; i < genres.length; i++) {
          if (genres[i].name === genre) return genres[i].id
        }
      })
    }
    dispatch(addVideogame(newVideogame))
    setForm({
      name: '',
      description: '',
      platforms: '',
      image: '',
      released: '',
      rating: '',
      genres: ''
    })
    handleBackClick()
  }

  const handleBackClick = () => {
    dispatch(setModalClose())
  }

  const handleDeleteGenre = (e) => {
    e.preventDefault()
    setForm({
      ...form,
      genres: [...form.genres].filter(genre => genre !== e.target.value)
    })
    setErrors(
      formValidation({
        ...form,
        genres: [...form.genres].filter(genre => genre !== e.target.value)
      })
    )
  }

  return (
    <ComponentContainer>
      <FormContainer>
        <BackButtonContainer>
          <button onClick={handleBackClick}><RxCross2 /></button>
        </BackButtonContainer>
        <FormMain onSubmit={onSubmit}>
          <InputContainer>
            <label className={errors.name && 'error'} htmlFor="name">Name:</label>
            <input className={errors.name && 'error'} type="text" name='name' id='name' onChange={handleInputChange} value={form.name} placeholder='ej: Las cronicas de Iván' />
            {errors.name && <span>{errors.name}</span>}
          </InputContainer>
          <InputContainer>
            <label className={errors.description && 'error'} htmlFor="description">Description:</label>
            <textarea className={errors.description && 'error'} name="description" id='description' cols="30" rows="10" onChange={handleInputChange} value={form.description}></textarea>
            {errors.description && <span>{errors.description}</span>}
          </InputContainer>
          <InputContainer>
            <label className={errors.platforms && 'error'} htmlFor="platforms">Platforms:</label>
            <input className={errors.platforms && 'error'} type="text" name='platforms' id='platforms' onChange={handleInputChange} value={form.platforms} placeholder='ej: PC, Playstation 5, Xbox One...' />
            {errors.platforms && <span>{errors.platforms}</span>}
          </InputContainer>
          <InputContainer>
            <label className={errors.image && 'error'} htmlFor="image">Image:</label>
            <input className={errors.image && 'error'} type="text" name="image" id='image' onChange={handleInputChange} value={form.image} placeholder='URL of your game image here...' />
            {errors.image && <span>{errors.image}</span>}
          </InputContainer>
          <InputContainer>
            <label className={errors.released && 'error'} htmlFor="released">Released:</label>
            <input className={errors.released && 'error'} type="date" name="released" id='released' onChange={handleInputChange} value={form.released} />
            {errors.released && <span>{errors.released}</span>}
          </InputContainer>
          <InputContainer className='ratingContainer'>
            <label className={errors.rating && 'error'} >Rating:</label>
            <select className={errors.rating && 'error'} name="rating" onChange={handleInputChange} value={form.rating}>
              <option hidden>Select Rating</option>
              <option value='1'>1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            {errors.rating && <span>{errors.rating}</span>}
          </InputContainer>
          <InputContainer className='genreContainer'>
            <label className={errors.genres && 'error'} >Genres: </label>
            <select className={errors.genres && 'error'} name="genres" onChange={handleInputChange} value={form.genres}>
              <option hidden>Select Genre</option>
              {genres.map(genre => <option value={genre.name} key={genre.id}>{genre.name}</option>)}
            </select>
            {errors.genres && <span>{errors.genres}</span>}
            <SelectedGenresContainer>
              {(!form.genres)
                ? ''
                : form.genres.map(genre => <GenreSpan key={genre}>{genre} <button value={genre} onClick={handleDeleteGenre}><RxCross2 className='icon' /></button></GenreSpan>)}
            </SelectedGenresContainer>
          </InputContainer>
          <SubmitButtonContainer>
            <button type="submit" disabled={Object.values(form).some(input => input !== '') ? Object.values(errors).some(err => err !== '') ? true : false : true}>Create</button>
          </SubmitButtonContainer>
        </FormMain>
      </FormContainer>
    </ComponentContainer>
  )
}
