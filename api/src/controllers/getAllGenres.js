const axios = require('axios')
const { Genre } = require('../db')
const { APIKEY } = process.env

const getAllGenres = async () => {
  try {
    const dbGenres = await Genre.findAll()

    if (!dbGenres.length) {
      let genres
      axios.get(`https://api.rawg.io/api/genres?key=${APIKEY}`)
        .then(res => res.json())
        .then(async ({ results }) => {
          if (!results) throw Error('API request error')
          genres = results.map(genre => {
            return {
              id: genre.id,
              name: genre.name
            }
          })
          await Genre.bulkCreate(genres)
        })
      return genres
    }

    return dbGenres.map(genre => {
      return {
        id: genre.id,
        name: genre.name
      }
    })
  } catch (error) {
    throw Error(error.message)
  }
}

module.exports = getAllGenres