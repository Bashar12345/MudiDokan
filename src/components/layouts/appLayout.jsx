import Navbar from '../Navbar';
import Header from '../Header';
import { Container } from '@mui/material';
import SearchAppBar from '../SearchBar';
import Footer from '../Footer';
import { Outlet } from 'react-router-dom'; // For nested routing support

const AppLayout = ({ children }) => {
    return (
        <Container maxWidth="xl">
            {/* Common Layout (Header, Navbar, etc.) */}
            <Header />
            <SearchAppBar />
            <Navbar />

            {/* Render dynamic content */}
            {children || <Outlet />}

            <Footer />
        </Container>
    );
};

export default AppLayout;
