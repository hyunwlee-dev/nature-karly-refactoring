import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import classes from './App.module.css';

import { BaseLayout } from '@/components/';
import { ModalWindow } from '@/components/ModalWindow/ModalWindow';
import AddCart from '@/components/AddCart/AddCart';

import MainPage from '@/pages/Main/MainPage';
import ProductDetail from '@/pages/ProductDetail/ProductDetail';
import ProductList from '@/pages/ProductList/ProductList';
import SignUp from '@/pages/SignUp/SignUp';
import CartPage from '@/pages/CartPage/CartPage';
import { useEffect } from 'react';
import { Suspense } from 'react';

function App() {
  return (
    <Router>
      <div className={classes.App}>
        <BaseLayout>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/productdetail" element={<ProductDetail />} />
            <Route path="/productlist" element={<ProductList />} />
            <Route path="/cartpage" element={<CartPage />} />
          </Routes>
        </BaseLayout>
        <ModalWindow modalId="addCartModal">
          <AddCart />
        </ModalWindow>
      </div>
    </Router>
  );
}

export default App;
