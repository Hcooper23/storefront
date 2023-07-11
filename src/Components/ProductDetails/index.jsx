import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProductDetails = () => {
  const { productId } = useParams();
  const product = useSelector((state) => state.products.find((p) => p.id === productId));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
    </div>
  );
};

export default ProductDetails;
