const Router = require('express')
const createVideogame = require('../controllers/createVideogame')
const getAllVideogames = require('../controllers/getAllVideogames')
const getVideogamesById = require('../controllers/getVideogameById')
const videogamesRouter = Router()
const getVideogamesByName = require('../controllers/getVideogamesByName')

videogamesRouter.get('/', async (req, res) => {
  const { name } = req.query
  try {
    let arrVideogames
    if (name) {
      arrVideogames = await getVideogamesByName(name)
    } else {
      arrVideogames = await getAllVideogames()
    }
    res.status(200).json({
      ok: true,
      arrVideogames
    })
  } catch (error) {
    res.status(400).json({
      ok: false,
      error: error.message
    })
  }
})

videogamesRouter.get('/:idVideogame', async (req, res) => {
  const { idVideogame } = req.params
  try {
    const videogame = await getVideogamesById(idVideogame)
    res.status(200).json({
      ok: true,
      videogame
    })
  } catch (error) {
    res.status(400).json({
      ok: false,
      error: error.message
    })
  }
})

videogamesRouter.post('/', async (req, res) => {
  const newVideogame = req.body
  try {
    const auxVideogame = await createVideogame(newVideogame)
    const { id, name, image, rating, genres } = await getVideogamesById(auxVideogame.videogame.id)
    res.status(200).json({
      response: auxVideogame.created
        ? {
          ok: true,
          message: 'Videogame created successfully!',
          createdVideogame: { id, name, image, rating, genres }
        }
        : {
          ok: false,
          message: 'Videogame alredy exists'
        }
    })
  } catch (error) {
    res.status(400).json({
      ok: false,
      error: error.message
    })
  }
})

module.exports = videogamesRouter