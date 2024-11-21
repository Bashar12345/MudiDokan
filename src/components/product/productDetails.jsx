import React, { useState } from 'react';
import { Box, Typography, Button, Divider, Rating, Card, CardContent } from '@mui/material';
import Grid from '@mui/material/Grid2'; // Grid2 from Material-UI
// import Grid2 from '@mui/material/Unstable_Grid2';

import {
  Tab,
  Tabs,
} from '@mui/material';


const product = {
  id: 1,
  name: "Wireless Noise Cancelling Headphones",
  description: "High-quality noise-canceling headphones with 40-hour battery life and superior sound quality.",
  price: 199.99,
  image: "https://www.shopz.com.bd/wp-content/uploads/2022/02/Mpow-MDots-True-Wireless-Earbuds-1.jpg",
  features: [
    "Active noise cancelation",
    "40-hour battery life",
    "Bluetooth 5.0",
    "Built-in microphone",
  ],
  ratings: 4.5,
  reviews: 120,
  reviews: [
    {
      id: 1,
      name: "Jane Doe",
      rating: 5,
      comment: "Absolutely love these headphones! The noise cancellation is superb.",
    },
    {
      id: 2,
      name: "John Smith",
      rating: 4,
      comment: "Great sound quality, but I wish they were a bit more comfortable for long usage.",
    },
  ],
  specifications: {
    brand: "SoundMagic",
    model: "NC-2024",
    weight: "250g",
    dimensions: "15 x 8 x 20 cm",
    connectivity: "Bluetooth 5.0",
  },
  availability: "In Stock",
};

const ProductDetails = () => {
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };
  return (
    <Box sx={{ padding: 3 }}>
      <Grid container spacing={1}>
        {/* Left Section: Product Image */}
        <Grid item xs={12} sm={6}>
          <Box
            component="img"
            src={product.image}
            alt={product.name}
            sx={{
              width: "100%",
              borderRadius: 2,
              objectFit: "cover",
            }}
          />
        </Grid>

        {/* Right Section: Product Details */}
        <Grid item xs={12} sm={6}>
          <Typography variant="h4" gutterBottom>
            {product.name}
          </Typography>

          <Typography variant="h5" color="primary" sx={{ marginBottom: 2 }}>
            ${product.price.toFixed(2)}
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: 2 }}>
            {product.description}
          </Typography>

          <Divider sx={{ marginY: 2 }} />

          {/* Features List */}
          <Typography variant="h6" gutterBottom>
            Key Features
          </Typography>
          <ul>
            {product.features.map((feature, index) => (
              <li key={index}>
                <Typography variant="body1">{feature}</Typography>
              </li>
            ))}
          </ul>

          <Divider sx={{ marginY: 2 }} />

          {/* Availability and Purchase Section */}
          <Typography variant="h6" gutterBottom>
            {product.availability}
          </Typography>
          <Box sx={{ display: "flex", gap: 2, marginTop: 2 }}>
            <Button variant="contained" color="secondary">
              Add to Cart
            </Button>
            <Button variant="outlined" color="primary">
              Buy Now
            </Button>
          </Box>
        </Grid>
      </Grid>

      {/* Bottom Section: Additional Info */}
      <Box sx={{ marginTop: 4 }}>
        
        {/* Additional Infos in future to add */}
       
      </Box>

      {/* Tabs Section */}
      <Box sx={{ marginTop: 4 }}>
        <Tabs
          value={tabValue}
          onChange={handleTabChange}
          textColor="primary"
          indicatorColor="primary"
          aria-label="product details tabs"
        >
          <Tab label="Specifications" />
          <Tab label="Description" />
          <Tab label="Reviews" />
        </Tabs>
        <Divider sx={{ marginY: 2 }} />

        {/* Tab Content */}
        {tabValue === 0 && (
          <Box>
            <Typography variant="h6" gutterBottom>
              Specifications
            </Typography>
            <ul>
              {Object.entries(product.specifications).map(([key, value], index) => (
                <li key={index}>
                  <Typography variant="body1">
                    <strong>{key}:</strong> {value}
                  </Typography>
                </li>
              ))}
            </ul>
          </Box>
        )}
        {tabValue === 1 && (
          <Box>
            <Typography variant="h6" gutterBottom>
              Product Description
            </Typography>
            <Typography variant="body1">{product.description}</Typography>
          </Box>
        )}
        {tabValue === 2 && (
          <Box>
            <Typography variant="h6" gutterBottom>
              Customer Reviews
            </Typography>
            {product.reviews.map((review) => (
              <Card key={review.id} sx={{ marginBottom: 2 }}>
                <CardContent>
                  <Typography variant="h6">{review.name}</Typography>
                  <Rating value={review.rating} precision={0.5} readOnly />
                  <Typography variant="body2" color="text.secondary">
                    {review.comment}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default ProductDetails;
