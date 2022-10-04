import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/lib/Header';
import Footer from './components/lib/Footer';
import index from './routes';

function App() {
  return (
    <>
      <Header />
      <index />
      <Footer />
    </>
  );
}

export default App;
