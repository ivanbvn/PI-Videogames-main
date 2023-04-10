const fetch = require('node-fetch')
const { Videogame, Genre } = require('../db')
const { Op } = require('sequelize')
const { APIKEY } = process.env

const getVideogamesByName = async (name) => {
  try {
    const dbVideogames = await getDbVideogamesByName(name)
    const apiVideogames = await getApiVideogamesByName(name)
    if ([...dbVideogames, ...apiVideogames].length === 0) throw Error('No matches found')
    return [...dbVideogames, ...apiVideogames]
  } catch (error) {
    throw Error(error.message)
  }
}

const getDbVideogamesByName = async (name) => {
  try {
    const auxVideogames = await Videogame.findAll({
      where: {
        name: {
          [Op.iLike]: `%${name}%`
        }
      },
      include: Genre
    })
    const dbVideogames = auxVideogames.map(vg => {
      return {
        id: vg.id,
        name: vg.name,
        image: vg.image,
        rating: vg.rating,
        genres: vg.genres.map(genre => genre.name)
      }
    })
    return dbVideogames
  } catch (error) {
    throw Error(error.message)
  }
}


const getApiVideogamesByName = async (name) => {
  try {
    let apiVideogames
    fetch(`https://api.rawg.io/api/games?search=${name}&key=${APIKEY}&page_size=15`)
      .then(res => res.json())
      .then(({ results }) => {
        apiVideogames = results.map(vg => {
          return {
            id: vg.id,
            name: vg.name,
            image: vg.background_image ? vg.background_image : 'https://sm.ign.com/ign_es/screenshot/default/60225-metal-gear-solid-3-subsistence-playstation-2_umwf.jpg',
            rating: vg.rating_top,
            genres: vg.genres.map(genre => genre.name)
          }
        })
      })
    return apiVideogames
  } catch (error) {
    throw Error(error.message)
  }
}

module.exports = getVideogamesByName