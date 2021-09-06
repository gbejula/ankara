import Layout from './components/Layout/Layout';
import { Container } from 'react-bootstrap';
import HomePage from './pages/HomePage';

function App() {
  return (
    <Layout>
      <main>
        <Container>
          <HomePage />
        </Container>
      </main>
    </Layout>
  );
}

export default App;
