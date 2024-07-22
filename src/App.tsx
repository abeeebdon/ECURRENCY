import './components/font.css'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Shop from './pages/Shop'
import FAQs from './pages/FAQs'
import Footer from './components/Footer'
import { useState } from 'react'
import Nav from './components/Nav'

function App() {
  const [showNav, setShowNav] = useState<boolean>(false)

  return (
    <div className="poppins ">
      <Header showNav={showNav} setShowNav={setShowNav} />
      {showNav && (
        <div
          className="flex flex-col gap-8 fixed right-0 top-[13%] text-white bg-slate-600 h-full p-4 w-[50%] z-20"
          onClick={() => setShowNav(false)}
        >
          <Nav />
        </div>
      )}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/FAQs" element={<FAQs />} />
        </Routes>
        <Footer />
      </main>
    </div>
  )
}

export default App
