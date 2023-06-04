import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainPage from './pages/MainPage'
import Araba from './pages/Araba'
import Footer from './components/Main/Footer'
import Navbar from './components/Main/Navbar'
import Scooter from './pages/Scooter'
import Bnb from './pages/Bnb'
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path='/Araba' element={<Araba />} />
            <Route path='/Scooter' element={<Scooter />} />
            <Route path='/Bnb' element={<Bnb />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App