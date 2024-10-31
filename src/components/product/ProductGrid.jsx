   // ProductGrid.js
import React from 'react';
import { Grid, Container, Typography } from '@mui/material';
import ProductCard from './ProductCard';

// productData.js
const products = [
  {
    id: 1,
    name: 'Product 1',
    description: 'A great product!',
    price: '20.99',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 2,
    name: 'Product 2',
    description: 'A second great product!',
    price: '25.99',
    image: 'https://via.placeholder.com/150',
  },
  // Add more products as needed
];

const ProductGrid = () => {
  return (
    <Container sx={{ paddingY: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Our Products
      </Typography>
      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ProductGrid;
