   // ProductGrid.js
import React from 'react';
import { Grid, Container,Box, Typography } from '@mui/material';
import {ProductCard, SecondaryProductCard} from './ProductCard';
import {products} from '../dummies/productData.js'

// productData.js



const ProductGrid = () => {
  return (
    <Box sx={{ py: 4, my:2 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Our Products
      </Typography>
      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
            <SecondaryProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProductGrid;
