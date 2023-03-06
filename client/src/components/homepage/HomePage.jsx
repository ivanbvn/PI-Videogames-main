import { useDispatch, useSelector } from 'react-redux'
import { ComponentContainer, SidebarComponent, MainComponent, PageSidebarAndMain } from "./StylesHomePage"
import { Form } from "../form/Form"
import { setModalOpen } from "../../redux/actions"
import { Filters } from "../filters/Filters"
import { VscAdd, VscRemove } from 'react-icons/vsc'
import { Cards } from "../cards/Cards"
import { Pagination } from '../pagination/Pagination'
import { useEffect, useState } from 'react'
import { Loading } from '../loading/Loading'
import { Error } from '../error/Error'

export const HomePage = () => {

  const dispatch = useDispatch()
  const { videogames, modal, loading } = useSelector(state => state)
  const [currentPage, setCurrentPage] = useState(1)
  const [posts, setPosts] = useState(videogames)
  const [postsPerPage, setPostsPerPage] = useState(12)
  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)

  useEffect(() => {
    setPosts(videogames)
    setCurrentPage(1)
  }, [videogames])

  const handleCreateClick = () => {
    dispatch(setModalOpen())
  }

  return (
    <ComponentContainer>
      {
        loading
          ? ''
          : <Pagination
            postsPerPage={postsPerPage}
            totalPosts={posts.length}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
          />
      }
      <PageSidebarAndMain>
        {
          loading
            ? ''
            : <SidebarComponent>
              <Filters />
            </SidebarComponent>
        }
        <MainComponent>
          {
            loading
              ? ''
              : <div className="modalButton">
                <button onClick={handleCreateClick} disabled={modal ? true : false}>{
                  modal
                    ? <VscRemove />
                    : <VscAdd />
                }</button>
              </div>
          }
          {
            loading
              ? <Loading />
              : videogames.length
                ? <Cards videogames={currentPosts} />
                : <Error />
          }
        </MainComponent>
      </PageSidebarAndMain>
      {
        modal
          ? <Form />
          : ''
      }
    </ComponentContainer>
  )
}