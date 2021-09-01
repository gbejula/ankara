import { Card } from 'react-bootstrap';

const Product = () => {
  return (
    <Card>
      <a href={`/product/${product._id}`}>
        <Card.Img></Card.Img>
      </a>
    </Card>
  );
};

export default Product;
