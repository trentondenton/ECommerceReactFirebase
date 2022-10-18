import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';


import {
  onAuthStateChangeListener,
  createUserDocumentFromAuth,
} from './utils/firebaseUtil';


// Pages
import Navigation from './components/navigation';
import Home from './pages/home';
import Shop from './pages/shop';
import Auth from './pages/auth';
import Checkout from './pages/checkout';

import { setCurrentUser } from './store/user/userAction';
const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = onAuthStateChangeListener(user => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      dispatch(setCurrentUser(user));
    });

    return unsubscribe;
  }, [dispatch]);

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
