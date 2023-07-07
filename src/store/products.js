const initialState = [
  {
    id: 1,
    name: 'Product 1',
    description: 'Description of Product 1',
    category: 'category1',
    price: 10,
    inventoryCount: 5,
  },
  {
    id: 2,
    name: 'Product 2',
    description: 'Description of Product 2',
    category: 'category1',
    price: 20,
    inventoryCount: 10,
  },
  {
    id: 3,
    name: 'Product 3',
    description: 'Description of Product 3',
    category: 'category2',
    price: 15,
    inventoryCount: 8,
  },
  // Add more products here
];

function productsReducer(state = initialState, action) {
  // Handle any future actions related to products
  return state;
}

export default productsReducer;
