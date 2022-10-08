import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Pages
import Navigation from './components/navigation';
import Home from './pages/home';
import Shop from './pages/shop';
import SignIn from './pages/signIn';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="sign-in" element={<SignIn />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
