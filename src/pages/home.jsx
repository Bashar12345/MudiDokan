import ProductGrid from "../components/product/ProductGrid"
import Features from "../components/Features"
import HeroBanner from "../components/HeroBanner"
import { Box } from "@mui/material"



const Home = () => {
    return (
        <Box> Home
            <HeroBanner/>
            <ProductGrid />
            <Features />
        </Box>

    )
}

export default Home