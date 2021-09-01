import products from './components/Shop/products';
import { Row, Col } from 'react-bootstrap';

const HomePage = () => {
  return (
    <div>
      <h1>Trending</h1>
      <Row>
        {products.map(product => (
          <Col sm={12} md={6} lg={4} xl={3}>
            <Products product={product} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default HomePage;
