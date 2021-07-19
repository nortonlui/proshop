import React from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import { Container } from 'react-bootstrap';
import HomeScreen from './components/screens/HomeScreen';
import ProductScreen from './components/screens/ProductScreen';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <>
        <Header />
        <main className="py-3">
          <Container>
            <Route exact path="/" component={HomeScreen} />
            <Route path="/product/:id" component={ProductScreen} />
          </Container>
        </main>
        <Footer />
      </>
    </Router>
  );
};

export default App;
