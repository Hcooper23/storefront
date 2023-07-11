const initialState = {
    cartItems: [],
  };
  
const cartReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TO_CART':
        return {
          ...state,
          cartItems: [...state.cartItems, action.payload],
        };
      case 'REMOVE_FROM_CART':
        return {
          ...state,
          cartItems: state.cartItems.filter(item => item.name !== action.payload.name),
        };
      case 'RESET_CART':
        return initialState;
      default:
        return state;
    }
  };
  
  export const addToCart = (product) => {
    return {
      type: 'ADD_TO_CART',
      payload: product,
    };
  };
  
  export const removeFromCart = (product) => {
    return {
      type: 'REMOVE_FROM_CART',
      payload: product,
    };
  };
  
  export const resetCart = () => {
    return {
      type: 'RESET_CART',
    };
  };
  
  export default cartReducer