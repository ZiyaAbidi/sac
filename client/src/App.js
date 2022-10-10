import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'owl.carousel/dist/assets/owl.carousel.css';

import Index from './routes/index';
import ScrollTop from './components/templates/ScrollTop';

function App() {
  return (
    <>
      <ScrollTop />

      <Index />
    </>
  );
}

export default App;
