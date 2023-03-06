import { useEffect } from 'react';
import { HomePage, DetailPage, LandingPage, Navbar } from './components'
import { Routes, Route, useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { getGenres } from './redux/actions';
import { AboutPage } from './components/about/AboutPage';

function App() {

  const { pathname } = useLocation()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getGenres())
  }, [])

  return (
    <>
      {
        pathname !== '/'
          ? <div className='navbar'>
            <Navbar />
          </div>
          : ''
      }

      <Routes>
        <Route path='/home' element={<HomePage />} />
        <Route path='/detail/:detailId' element={<DetailPage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/' element={<LandingPage />} />
      </Routes>
    </>
  );
}

export default App;