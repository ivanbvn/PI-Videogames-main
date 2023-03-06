import { NavLink } from "react-router-dom"
import { CardComponent, GenresContainer, ImgContainer, InfoContainer, NameContainer, RatingContainer, RatingStars } from "./StylesCard"
import { AiFillStar } from 'react-icons/ai'

export const Card = ({ videogame }) => {
  return (
    <CardComponent>
      <NavLink to={`/detail/${videogame.id}`} key={videogame.id} className='cardLink'>
        <ImgContainer>
          <img src={videogame.image} alt={videogame.name} />
        </ImgContainer>
        <div className="cardName">
          <h3>{videogame.name}</h3>
        </div>
        <InfoContainer className="infoContainer">
          <NameContainer>
            <h4>{videogame.name}</h4>
          </NameContainer>
          <RatingContainer>
            <div>
              <span>Rating: </span>
            </div>
            <RatingStars>
              {videogame.rating >= 1 && <AiFillStar />}
              {videogame.rating >= 2 && <AiFillStar />}
              {videogame.rating >= 3 && <AiFillStar />}
              {videogame.rating >= 4 && <AiFillStar />}
              {videogame.rating >= 5 && <AiFillStar />}
            </RatingStars>
          </RatingContainer>
          <GenresContainer>
            <div>
              <span>Genres: </span>
            </div>
            <div>
              <span>{videogame.genres?.join(' - ')}</span>
            </div>
          </GenresContainer>
        </InfoContainer>
      </NavLink>
    </CardComponent>
  )
}
