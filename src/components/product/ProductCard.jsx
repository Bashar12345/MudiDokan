// ProductCard.js
import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';

// Primary Product Card
export const ProductCard = ({ product }) => {
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

// Secondary Product Card
export const SecondaryProductCard = ({ product }) => {
  return (
    <Card
      sx={{
        width: '350px',
        height: '400px',
        margin: 'auto',
        // border: '1px solid #ccc',  
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <CardMedia
        component="img"
        image={product.image}
        alt={product.name}
        sx={{
          height: '250px',
          width: '350px',
          objectFit: 'contain', // Ensures image covers the entire area without distortion
        }}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="body1" component="div">
          {product.name}
        </Typography>
        {/* Fixed height for description */}
        <Typography
          variant="body2"
          color="text.secondary"
          gutterBottom
          sx={{
            height: '48px', // Fixed height for two lines
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: 3, // Ensures maximum of 3 lines
            WebkitBoxOrient: 'vertical',
          }}
        >
          {product.description}
        </Typography>
        <Typography variant="body2" color="primary" fontWeight="bold">
          ${product.price}
        </Typography>
      </CardContent>
    </Card>
  );
};


