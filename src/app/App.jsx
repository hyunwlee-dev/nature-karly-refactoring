import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import classes from './App.module.css';

import { BaseLayout } from '@/components/';
import AddCart from '@/components/AddCart/AddCart';
import { ModalWindow } from '@/components/ModalWindow/ModalWindow';

import CartPage from '@/pages/CartPage/CartPage';
import MainPage from '@/pages/Main/MainPage';
import ProductDetail from '@/pages/ProductDetail/ProductDetail';
import ProductList from '@/pages/ProductList/ProductList';
import SignUp from '@/pages/SignUp/SignUp';

function App() {
  return (
    <Router>
      <div className={classes.App}>
        <BaseLayout>
          <Routes>
            <Route element={<MainPage />} path="/" />
            <Route element={<SignUp />} path="/signup" />
            <Route element={<ProductDetail />} path="/productdetail" />
            <Route element={<ProductList />} path="/productlist" />
            <Route element={<CartPage />} path="/cartpage" />
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
