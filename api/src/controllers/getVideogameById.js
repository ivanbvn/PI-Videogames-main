const { Videogame, Genre } = require('../db')
const { APIKEY } = process.env
const { validate } = require('uuid')

const getVideogamesById = async (id) => {
  try {
    if (validate(id)) {
      const dbVideogame = await searchOnDb(id)
      if (dbVideogame) return dbVideogame
      throw Error('Videogame not found')
    } else if (Number(id)) {
      const apiVideogame = await searchOnApi(id)
      if (apiVideogame) return apiVideogame
      throw Error('Videogame not found')
    } else {
      throw Error('Videogame not found')
    }
  } catch (error) {
    throw Error(error.message)
  }
}

const searchOnApi = async (id) => {
  let apiVideogame
  await fetch(`https://api.rawg.io/api/games/${id}?key=${APIKEY}`)
    .then(response => response.json())
    .then(data => {
      if (data.detail) throw Error('Videogame not found')
      apiVideogame = {
        id: data.id,
        name: data.name,
        description: data.description,
        platforms: data.platforms.map(r => r.platform.name),
        image: data.background_image ? data.background_image : 'https://sm.ign.com/ign_es/screenshot/default/60225-metal-gear-solid-3-subsistence-playstation-2_umwf.jpg',
        released: data.released,
        rating: data.rating_top,
        genres: data.genres.map(genre => genre.name)
      }
    })
  return apiVideogame
}

const searchOnDb = async (id) => {
  try {
    const dbVideogame = await Videogame.findByPk(id)
    return dbVideogame
  } catch (error) {
    throw Error(error.message)
  }
}

module.exports = getVideogamesById

