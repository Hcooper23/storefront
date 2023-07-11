import { useSelector, useDispatch } from 'react-redux';
import { Grid, Typography, Card, CardActions, CardContent, CardMedia, Button } from '@mui/material';
import { addToCart } from '../../store/cart.js';

function Products() {
  const activeCategory = useSelector(state => state.categories.activeCategory);
  const products = useSelector(state => state.products);
  const dispatch = useDispatch();

  const {filteredProducts} = activeCategory
    ? products.filter(product => product.category === activeCategory)
    : products;

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <Grid container spacing={2}>
      {filteredProducts.length === 0 ? (
        <Grid item xs={12}>
          <Typography variant="body1">No products available.</Typography>
        </Grid>
      ) : (
        filteredProducts.map((product) => (
          <Grid item xs={3} sm={4} md={4} key={product.id}>
            <Card variant="outlined">
              <CardMedia
                component="img"
                height="140"
                image={`https://source.unsplash.com/random/?${product.name}`}
                alt="Random image"
              />
              <CardContent>
                <Typography variant="h5" component="div">
                  Name: {product.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Price: {product.price} dollars
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  In-Stock: {product.inStock}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" onClick={() => handleAddToCart(product)}>Add to Cart</Button>
                <Button size="small">View Details</Button>
              </CardActions>
            </Card>
          </Grid>
        ))
      )}
    </Grid>
  );
}

export default Products;

