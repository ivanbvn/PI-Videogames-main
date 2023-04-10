const fetch = require('node-fetch')
const { Videogame, Genre } = require('../db')
const { APIKEY } = process.env

const getAllVideogames = async () => {
  try {
    const apiVideogames = await getAllApiVideogames()
    const dbVideogames = await getAllDbVideogames()
    if (![...dbVideogames, ...apiVideogames].length) throw Error('Videogames not found')
    return [...dbVideogames, ...apiVideogames]
  } catch (error) {
    throw Error(error.message)
  }
}

const getAllDbVideogames = async () => {
  try {
    const videogames = await Videogame.findAll({
      include: Genre
    })
    return videogames.map(vg => {
      return {
        id: vg.id,
        name: vg.name,
        image: vg.image,
        rating: vg.rating,
        genres: vg.genres.map(genre => genre.name)
      }
    })
  } catch (error) {
    throw Error(error.message)
  }
}

const getAllApiVideogames = async (url = `https://api.rawg.io/api/games?key=${APIKEY}&page_size=20`, videogames = []) => {
  if (videogames.length === 100) return videogames

  try {
    let auxVideogames
    let nextPage
    await fetch(url)
      .then(response => response.json())
      .then(({ results, next }) => {
        nextPage = next
        auxVideogames = results.map(vg => {
          return {
            id: vg.id,
            name: vg.name,
            image: vg.background_image ? vg.background_image : 'https://sm.ign.com/ign_es/screenshot/default/60225-metal-gear-solid-3-subsistence-playstation-2_umwf.jpg',
            rating: vg.rating_top,
            genres: vg.genres.map(genre => genre.name)
          }
        })
      })
    videogames = [...videogames, ...auxVideogames]
    return getAllApiVideogames(nextPage, videogames)
  } catch (error) {
    throw Error(error.message)
  }
}

module.exports = getAllVideogames