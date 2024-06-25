import React from 'react';
import { Button, Box } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const BookToCart = ({ fullAddress, deliveryInfo }) => {
  return (
    <Box display="flex" alignItems="center" gap={2}>
      <Button variant="contained" color="primary" startIcon={<AddShoppingCartIcon />} sx={{ height: '60px', flexGrow: 1 }}>
        ADD TO CART
      </Button>
      <Button variant="outlined" color="primary" startIcon={<FavoriteBorderIcon />} sx={{ height: '60px', flexGrow: 1 }}>
        WISH
      </Button>
    </Box>
  );
};

export default BookToCart;
