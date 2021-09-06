import products from '../products';
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Layout/Product';

const HomePage = () => {
  return (
    <div>
      <h1>Trending</h1>
      <Row>
        {products.map(product => (
          <Col sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default HomePage;
