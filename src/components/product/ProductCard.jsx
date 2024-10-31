// ProductCard.js
import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
  
  
const ProductCard = ({ product }) => {
  return (
    <Card sx={{ maxWidth: 345, margin: 'auto' }}>
      <CardMedia
        component="img"
        height="200"
        image={product.image}
        alt={product.name}
      />
      <CardContent>
        <Typography variant="h6" component="div">
          {product.name}
        </Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          {product.description}
        </Typography>
        <Typography variant="h6" color="primary" fontWeight="bold">
          ${product.price}
        </Typography>
      </CardContent>
      <Button variant="contained" color="secondary" fullWidth>
        Add to Cart
      </Button>
    </Card>
  );
};

export default ProductCard;
