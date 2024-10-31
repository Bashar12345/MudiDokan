import { useState } from 'react'
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme/index'; // Import your custom theme
import Navbar from './components/Navbar'
import Header from './components/Header'
import { Container } from '@mui/material'
import SearchAppBar from './components/SearchBar'
import HeroBanner from './components/HeroBanner'
import Features from './components/Features'
import Footer from './components/Footer'
import ProductBody from './pages/products';

function App() {
  const [count, setCount] = useState(0)

  return (

    <ThemeProvider theme={theme}>
      <Container maxWidth='xl'>
        <Header />
        <SearchAppBar />
        <Navbar />
        <HeroBanner />
        <ProductBody/>
        <Features />
        <Footer />
      </Container>
    </ThemeProvider>

  )
}

export default App
