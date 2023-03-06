import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { getVideogameById, removeActiveVideogame } from "../../redux/actions"
import { Loading } from "../loading/Loading"
import { AiFillStar } from 'react-icons/ai'
import { TbArrowBackUp } from 'react-icons/tb'
import { ComponentContainer, ImgContainer, BackButtonContainer, DetailContainer, InfoContainer } from "./StylesDetailPage"

export const DetailPage = () => {

  const { detailId } = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { activeVideogame, loading } = useSelector(state => state)

  useEffect(() => {
    dispatch(getVideogameById(detailId))
    return () => {
      dispatch(removeActiveVideogame())
    }
  }, [])

  return (
    <>
      {
        loading
          ? <Loading />
          : <ComponentContainer>
            <DetailContainer>
              <ImgContainer>
                <img src={activeVideogame.image} alt={activeVideogame.name} />
              </ImgContainer>
              <BackButtonContainer>
                <button onClick={() => { navigate(-1) }}><TbArrowBackUp className="backIcon" /></button>
              </BackButtonContainer>
              <InfoContainer>
                <div>
                  <h2>{activeVideogame.name}</h2>
                </div>
                <div className="info">
                  <div>
                    <h4>Description:</h4>
                  </div>
                  <div>
                    <span>{activeVideogame.description}</span>
                  </div>
                </div>
                <div className="info">
                  <div>
                    <h4>Released: </h4>
                  </div>
                  <div>
                    <span>{activeVideogame.released}</span>
                  </div>
                </div>
                <div className="info">
                  <div>
                    <h4>Rating: </h4>
                  </div>
                  <div>
                    {activeVideogame.rating >= 1 && <AiFillStar className="ratingStar" />}
                    {activeVideogame.rating >= 2 && <AiFillStar className="ratingStar" />}
                    {activeVideogame.rating >= 3 && <AiFillStar className="ratingStar" />}
                    {activeVideogame.rating >= 4 && <AiFillStar className="ratingStar" />}
                    {activeVideogame.rating >= 5 && <AiFillStar className="ratingStar" />}
                  </div>
                </div>
                <div className="info">
                  <div>
                    <h4>Platforms: </h4>
                  </div>
                  <div>
                    <span>{activeVideogame.platforms?.join(' - ')}</span>
                  </div>
                </div>
                <div className="info">
                  <div>
                    <h4>Genres: </h4>
                  </div>
                  <div>
                    <span>{activeVideogame.genres?.join(' - ')}</span>
                  </div>
                </div>
              </InfoContainer>
            </DetailContainer>
          </ComponentContainer>
      }
    </>
  )
}