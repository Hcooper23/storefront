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
const FETCH_CATEGORIES = 'FETCH_CATEGORIES'; // Define a new action type

export function changeProducts(category) {
  return { type: CHANGE_PRODUCTS, payload: category };
}

export function fetchCategories() {
  // Implement logic to fetch categories from the remote API
  return { type: FETCH_CATEGORIES };
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
