import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories } from '../../store/categories/index.js';
import { changeProducts } from '../../store/products.js';
import Link from '@mui/material/Link';

function Categories() {
  const categories = useSelector(state => state.categories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories()); // Fetch categories from the remote API on component mount
  }, [dispatch]);

  const categoryHandler = (category) => {
    dispatch(changeProducts(category));
  };

  return (
    <>
      <h1>Browse Our Categories</h1>
      {categories.map((category, index) => (
        <Link
          className='links'
          key={`categories-${index}`}
          underline="hover"
          onClick={() => categoryHandler(category)}
        >
          {category.displayName} |
        </Link>
      ))}
    </>
  );
}

export default Categories;

