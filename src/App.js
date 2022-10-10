import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Pages
import Navigation from './components/navigation';
import Home from './pages/home';
import Shop from './pages/shop';
import Auth from './pages/auth';
import Checkout from './pages/checkout';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="shop/*" element={<Shop />} />
          <Route path="auth" element={<Auth />} />
          <Route path="checkout" element={<Checkout />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
