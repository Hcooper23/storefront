import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCategory, resetCategory } from '../store/categories';

function Categories() {
  const categories = useSelector(state => state.categories);
  const activeCategory = useSelector(state => state.activeCategory);
  const dispatch = useDispatch();

  const handleCategoryClick = category => {
    if (category === activeCategory) {
      dispatch(resetCategory());
    } else {
      dispatch(selectCategory(category));
    }
  };

  return (
    <div>
      <h2>Categories</h2>
      <ul>
        {categories.map(category => (
          <li
            key={category.id}
            className={category === activeCategory ? 'active' : ''}
            onClick={() => handleCategoryClick(category)}
          >
            {category.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
