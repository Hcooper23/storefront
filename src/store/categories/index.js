const initialState = {
  categories: [
    {
      id: 1,
      name: 'category1',
      displayName: 'Category 1',
      description: 'Description of Category 1',
    },
    {
      id: 2,
      name: 'category2',
      displayName: 'Category 2',
      description: 'Description of Category 2',
    },
    // Add more categories here
  ],
  activeCategory: null,
};

// Action types
const SELECT_CATEGORY = 'SELECT_CATEGORY';

// Action creator
export function selectCategory(category) {
  return { type: SELECT_CATEGORY, payload: category };
}

// Reducer
function categoriesReducer(state = initialState, action) {
  switch (action.type) {
    case SELECT_CATEGORY:
      return { ...state, activeCategory: action.payload };
    default:
      return state;
  }
}

export default categoriesReducer;
