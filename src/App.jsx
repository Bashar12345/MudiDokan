import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import theme from './theme/index'; // Import your custom theme
import Home from './pages/home';
import ProductBody from './pages/products';
import AppLayout from './components/layouts/appLayout';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <AppLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ProductBody />} />
            {/* Add other routes here */}
            {/* <Route path="/pricing" element={<Pricing />} /> */}
            {/* <Route path="/blog" element={<Blog />} /> */}
            {/* <Route path="/hot-items" element={<HotItems />} /> */}
            {/* <Route path="/flash-sell" element={<FlashSell />} /> */}
          </Routes>
        </AppLayout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
