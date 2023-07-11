import { useSelector } from 'react-redux';

const ShoppingCart = () => {
  const {cartItems} = useSelector((state) => state.cart);

  // Render the shopping cart details and the form for billing/shipping address and credit card information

  return (
    <div>
      {/* Render the summary of items in the cart */}
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            {/* Add additional table headers if needed */}
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.description}</td>
              {/* Add additional table cells if needed */}
            </tr>
          ))}
        </tbody>
      </table>

      {/* Render the final order total */}
      <p>Total: {cartItems.length}</p>

      {/* Render the form for billing/shipping address and credit card information */}
      {/* Handle form submission */}
    </div>
  );
};

export default ShoppingCart;
