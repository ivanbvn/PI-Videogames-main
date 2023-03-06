const { Videogame } = require('../db')

const createVideogame = async (newVideogame) => {
  try {
    const [videogame, created] = await Videogame.findOrCreate({
      where: {
        name: newVideogame.name,
        description: newVideogame.description,
        platforms: newVideogame.platforms,
        image: newVideogame.image,
        released: newVideogame.released,
        rating: newVideogame.rating,
      }
    })
    if (created) await videogame.addGenres(newVideogame.genres)
    return { videogame, created }
  } catch (error) {
    throw Error(error.message)
  }
}

module.exports = createVideogame