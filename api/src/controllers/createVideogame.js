const { Videogame } = require('../db')

const createVideogame = async (newVideogame) => {
  try {
    const createdVideogame = await Videogame.create({
      name: newVideogame.name,
      description: newVideogame.description,
      platforms: newVideogame.platforms,
      image: newVideogame.image,
      released: newVideogame.released,
      rating: newVideogame.rating,
    })
    await createdVideogame.addGenres(newVideogame.genres)
    return createdVideogame
  } catch (error) {
    throw Error(error.message)
  }
}

module.exports = createVideogame