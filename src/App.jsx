import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Navbar from './components/Navbar'
import Header from './components/Header'
import { Container } from '@mui/material'
import SearchAppBar from './components/SearchBar'
import HeroBanner from './components/HeroBanner'
import Features from './components/Features'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Container maxWidth='xl'>
        <Header />
        <SearchAppBar />
        <Navbar />
        <HeroBanner />
       
        <Features />
        <Footer/>
      </Container>
    </>
  )
}

export default App
