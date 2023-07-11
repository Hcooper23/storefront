import React from 'react';
import { useSelector } from 'react-redux';
import { Typography, List, ListItem, ListItemText } from '@mui/material';

function SimpleCart() {
  const cartItems = useSelector(state => state.cart);

  return (
    <div>
      <Typography variant="h5">Cart</Typography>
      {cartItems.length === 0 ? (
        <Typography variant="body1">Your cart is empty.</Typography>
      ) : (
        <List>
          {cartItems.map((item, index) => (
            <ListItem key={index}>
              <ListItemText primary={item.name} secondary={`Price: $${item.price}`} />
            </ListItem>
          ))}
        </List>
      )}
    </div>
  );
}

export default SimpleCart;
