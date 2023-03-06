import {
  ADD_VIDEOGAME,
  GET_GENRES,
  GET_VIDEOGAMES,
  GET_ACTIVE_VIDEOGAME,
  REMOVE_ACTIVE_VIDEOGAME,
  SET_LOADING_TRUE,
  SET_LOADING_FALSE,
  SET_MODAL_TRUE,
  SET_MODAL_FALSE,
  FILTER_SOURCE,
  FILTER_GENRE,
  SORT_NAME_ASCENDING_ORDER,
  SORT_NAME_DESCENDING_ORDER,
  SORT_RATING_ASCENDING_ORDER,
  SORT_RATING_DESCENDING_ORDER,
  NO_FILTER,
  NO_SORT
} from "./actions"

const initialState = {
  allVideogames: [],
  videogames: [],
  preSortVideogames: [],
  genres: [],
  activeVideogame: {},
  loading: true,
  modal: false
}

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {

    // Contexts
    case SET_LOADING_TRUE: {
      return {
        ...state,
        loading: true
      }
    }
    case SET_LOADING_FALSE: {
      return {
        ...state,
        loading: false
      }
    }
    case SET_MODAL_TRUE: {
      return {
        ...state,
        modal: true
      }
    }
    case SET_MODAL_FALSE: {
      return {
        ...state,
        modal: false
      }
    }

    // Videogames
    case GET_VIDEOGAMES:
      return {
        ...state,
        allVideogames: [...payload],
        videogames: [...payload]
      }
    case GET_ACTIVE_VIDEOGAME:
      return {
        ...state,
        activeVideogame: payload,
      }
    case REMOVE_ACTIVE_VIDEOGAME:
      return {
        ...state,
        activeVideogame: {},
      }
    case ADD_VIDEOGAME:
      return {
        ...state,
        allVideogames: [payload, ...state.allVideogames],
        videogames: [payload, ...state.videogames]
      }

    // Genres
    case GET_GENRES:
      return {
        ...state,
        genres: [...payload]
      }

    // Filters
    case NO_FILTER:
      return {
        ...state,
        videogames: state.allVideogames
      }
    case FILTER_SOURCE:
      return {
        ...state,
        videogames: state.allVideogames.filter(
          vg => {
            if (payload === 'api') {
              if (typeof vg.id === 'number') return vg
            } else if (payload === 'database') {
              if (typeof vg.id === 'string') return vg
            } else {
              return vg
            }
          })
      }
    case FILTER_GENRE:
      return {
        ...state,
        videogames: state.videogames.filter(
          vg => vg.genres.some(genre => genre === payload))
      }

    // Sorts
    case NO_SORT:
      return {
        ...state,
        preSortVideogames: [],
        videogames: (!state.preSortVideogames.length ? [...state.videogames] : [...state.preSortVideogames])
      }
    case SORT_NAME_ASCENDING_ORDER:
      return {
        ...state,
        preSortVideogames: (!state.preSortVideogames.length ? [...state.videogames] : [...state.preSortVideogames]),
        videogames: [...state.videogames].sort(
          (vg1, vg2) => {
            const nameA = vg1.name.toUpperCase()
            const nameB = vg2.name.toUpperCase()
            if (nameA < nameB) return -1
            if (nameA > nameB) return 1
            return 0
          })
      }
    case SORT_NAME_DESCENDING_ORDER:
      return {
        ...state,
        preSortVideogames: (!state.preSortVideogames.length ? [...state.videogames] : [...state.preSortVideogames]),
        videogames: [...state.videogames].sort(
          (vg1, vg2) => {
            const nameA = vg1.name.toUpperCase()
            const nameB = vg2.name.toUpperCase()
            if (nameA < nameB) return 1
            if (nameA > nameB) return -1
            return 0
          })
      }
    case SORT_RATING_ASCENDING_ORDER:
      return {
        ...state,
        preSortVideogames: (!state.preSortVideogames.length ? [...state.videogames] : [...state.preSortVideogames]),
        videogames: [...state.videogames].sort(
          (vg1, vg2) => vg1.rating - vg2.rating
        )
      }
    case SORT_RATING_DESCENDING_ORDER:
      return {
        ...state,
        preSortVideogames: (!state.preSortVideogames.length ? [...state.videogames] : [...state.preSortVideogames]),
        videogames: [...state.videogames].sort(
          (vg1, vg2) => vg2.rating - vg1.rating
        )
      }
    default:
      return { ...state }
  }
}

export default rootReducer