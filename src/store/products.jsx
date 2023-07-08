let initialState ={
  products: [
    { name: 'TV', category: 'electronics', price: 699.00, inStock: 5 },
    { name: 'Radio', category: 'electronics', price: 99.00, inStock: 15 },
    { name: 'Shirt', category: 'clothing', price: 9.00, inStock: 25 },
    { name: 'Socks', category: 'clothing', price: 12.00, inStock: 10 },
    { name: 'Apples', category: 'food', price: .99, inStock: 500 },
    { name: 'Eggs', category: 'food', price: 1.99, inStock: 12 },
    { name: 'Bread', category: 'food', price: 2.39, inStock: 90 },
  ]
};

function productsReducer(state = initialState, action) {
  switch (action.type) {
    case 'CHANGE_PRODUCTS':
      return {
        ...state,
        products: initialState.products.filter(product => product.category === action.payload.name)
      }
    case 'RESET':
      return initialState;
    default:
      return state;
  }
}

export const changeProducts = (category) => {
  return {
    type: 'CHANGE_PRODUCTS',
    payload: category,
  }
}

export const reset = () => {
  return {
    type: 'RESET',
    payload: {}
  }
}

export default productsReducer;