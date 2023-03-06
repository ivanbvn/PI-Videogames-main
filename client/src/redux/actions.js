import { apiRequest } from "../helpers/apiRequest";

export const GET_VIDEOGAMES = 'GET_VIDEOGAMES'
export const GET_GENRES = 'GET_GENRES'
export const GET_ACTIVE_VIDEOGAME = 'GET_ACTIVE_VIDEOGAME'
export const REMOVE_ACTIVE_VIDEOGAME = 'REMOVE_ACTIVE_VIDEOGAME'
export const ADD_VIDEOGAME = 'ADD_VIDEOGAME'
export const FILTER_GENRE = 'FILTER_GENRE'
export const FILTER_SOURCE = 'FILTER_SOURCE'
export const NO_FILTER = 'NO_FILTER'
export const SORT_NAME_ASCENDING_ORDER = 'SORT_NAME_ASCENDING_ORDER'
export const SORT_NAME_DESCENDING_ORDER = 'SORT_NAME_DESCENDING_ORDER'
export const SORT_RATING_ASCENDING_ORDER = 'SORT_RATING_ASCENDING_ORDER'
export const SORT_RATING_DESCENDING_ORDER = 'SORT_RATING_DESCENDING_ORDER'
export const NO_SORT = 'NO_SORT'
export const SET_LOADING_TRUE = 'SET_LOADING_TRUE'
export const SET_LOADING_FALSE = 'SET_LOADING_FALSE'
export const SET_MODAL_TRUE = 'SET_MODAL_TRUE'
export const SET_MODAL_FALSE = 'SET_MODAL_FALSE'

export const setModalOpen = () => {
  return {
    type: SET_MODAL_TRUE
  }
}

export const setModalClose = () => {
  return {
    type: SET_MODAL_FALSE
  }
}

export const filterByGenre = (genre) => {
  if (genre !== 'none') {
    return {
      type: FILTER_GENRE,
      payload: genre
    }
  } else {
    return {
      type: NO_FILTER,
    }
  }
}

export const filterBySource = (source) => {
  if (source !== 'none') {
    return {
      type: FILTER_SOURCE,
      payload: source
    }
  } else {
    return {
      type: NO_FILTER,
    }
  }
}

export const noFilters = () => {
  return {
    type: NO_FILTER
  }
}

export const sort = (sortType) => {
  switch (sortType) {
    case 'ratingAsc':
      return {
        type: SORT_RATING_ASCENDING_ORDER
      }
    case 'ratingDesc':
      return {
        type: SORT_RATING_DESCENDING_ORDER
      }
    case 'nameAsc':
      return {
        type: SORT_NAME_ASCENDING_ORDER
      }
    case 'nameDesc':
      return {
        type: SORT_NAME_DESCENDING_ORDER
      }
    default:
      return {
        type: NO_SORT
      }
  }
}

export const getVideogames = (name) => {
  return async function (dispatch) {
    dispatch({ type: SET_LOADING_TRUE })
    if (name) {
      try {
        const { data } = await apiRequest.get(`/videogames?name=${name}`)
        const { ok, arrVideogames } = data
        if (ok) {
          dispatch({
            type: GET_VIDEOGAMES,
            payload: arrVideogames
          })
          dispatch({
            type: SET_LOADING_FALSE
          })
        } else if (!ok) {
          throw Error(data.error)
        }
      } catch (error) {
        dispatch({
          type: SET_LOADING_FALSE
        })
        console.log(error)
      }
    } else {
      try {
        const { data } = await apiRequest.get('/videogames')
        const { ok, arrVideogames } = data
        if (ok) {
          dispatch({
            type: GET_VIDEOGAMES,
            payload: arrVideogames
          })
        } else if (!ok) {
          throw Error(data.error)
        }
        dispatch({
          type: SET_LOADING_FALSE
        })
      } catch (error) {
        dispatch({
          type: SET_LOADING_FALSE
        })
        console.log(error)
      }
    }
  }
}

export const getVideogameById = (id) => {
  return async function (dispatch) {
    dispatch({
      type: SET_LOADING_TRUE
    })
    try {
      const { data } = await apiRequest.get(`/videogames/${id}`)
      const { ok, videogame } = data
      if (ok) {
        dispatch({
          type: GET_ACTIVE_VIDEOGAME,
          payload: videogame
        })
      } else if (!ok) {
        throw Error(data.error)
      }
      dispatch({
        type: SET_LOADING_FALSE
      })
    } catch (error) {
      dispatch({
        type: SET_LOADING_FALSE
      })
      console.log(error)
    }
  }
}

export const removeActiveVideogame = () => {
  return async function (dispatch) {
    dispatch({
      type: REMOVE_ACTIVE_VIDEOGAME
    })
  }
}

export const addVideogame = (newVideogame) => {
  return async function (dispatch) {
    try {
      const { data } = await apiRequest.post('/videogames', newVideogame)
      const { ok, createdVideogame, message } = data.response
      if (ok) {
        dispatch({
          type: ADD_VIDEOGAME,
          payload: createdVideogame
        })
        alert(message)
      } else if (!ok) {
        throw Error(message)
      }
    } catch (error) {
      alert(error.message)
    }
  }
}

export const getGenres = () => {
  return async function (dispatch) {
    try {
      const { data } = await apiRequest.get('/genres')
      const { ok, genres } = data
      if (ok) {
        return dispatch({
          type: GET_GENRES,
          payload: genres
        })
      } else {
        throw Error(data.error)
      }
    } catch (error) {
      console.log(error)
    }
  }
}