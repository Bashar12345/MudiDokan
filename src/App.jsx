import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme/index'; // Import your custom theme
import Navbar from './components/Navbar';
import Header from './components/Header';
import { Container } from '@mui/material';
import SearchAppBar from './components/SearchBar';
import HeroBanner from './components/HeroBanner';
import Features from './components/Features';
import Footer from './components/Footer';
import ProductBody from './pages/products';
// import Pricing from './pages/Pricing'; 
// import Blog from './pages/Blog';
// import HotItems from './pages/HotItems';
// import FlashSell from './pages/FlashSell';

function App() {
  const [count, setCount] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Container maxWidth='xl'>
          {/* The Layout (Header, Navbar, etc.) */}
          <Header />
          <SearchAppBar />
          <Navbar />
          
          {/* Dynamic Routes */}
          <Routes>
            <Route path="/" element={<HeroBanner />} />
            <Route path="/products" element={<ProductBody />} />
            {/* Add other routes here */}
            {/* <Route path="/pricing" element={<Pricing />} /> */}
            {/* <Route path="/blog" element={<Blog />} /> */}
            {/* <Route path="/hot-items" element={<HotItems />} /> */}
            {/* <Route path="/flash-sell" element={<FlashSell />} /> */}
          </Routes>

          {/* Global Components */}
          <Features />
          <Footer />
        </Container>
      </Router>
    </ThemeProvider>
  );
}

export default App;
