const Router = require('express')
const getAllGenres = require('../controllers/getAllGenres')
const genresRouter = Router()

genresRouter.get('/', async(req, res) => {
  try {
    const genres = await getAllGenres()
    res.json({
      ok: true,
      genres
    })
  } catch (error) {
    res.status(400).json({
      ok: false,
      error: error.message
    })
  }
})

module.exports = genresRouter