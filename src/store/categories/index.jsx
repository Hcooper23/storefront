const initialState = {
  categories: [
    { name: 'electronics', displayName: 'Electronics' },
    { name: 'food', displayName: 'Food' },
    { name: 'clothing', displayName: 'Clothing' },
    // Add more categories here
  ],
  activeCategory: null,
};

const CHANGE_PRODUCTS = 'CHANGE_PRODUCTS';

export function changeProducts(category) {
  return { type: CHANGE_PRODUCTS, payload: category };
}


function categoriesReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_PRODUCTS:
      return { ...state, activeCategory: action.payload };
    default:
      return state;
  }
}

export default categoriesReducer;
