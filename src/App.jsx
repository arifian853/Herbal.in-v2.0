import { React, useState, useEffect } from 'react';
import { Route, Routes, useSearchParams } from 'react-router-dom';
import './App.css';

import { getAllProducts } from './Utils/ProductsFetcher';

import { UserAuthContextProvider } from './Context/UserAuthContext';
import toast, { Toaster } from 'react-hot-toast';
import { ProtectedRoute } from './Components/ProtectedRoute';
import { LandingPage } from './Pages/LandingPage';
import { LoginPage } from './Pages/LoginPage';
import { RegisterPage } from './Pages/RegisterPage';
import { AdminLoginPage } from './Pages/AdminLoginPage';
import { NotFoundPage } from './Pages/NotFoundPage';
import { HomePage } from './Pages/HomePage';
import { Navbar } from './Components/Navbar';
import { Articles } from './Pages/Articles';
import { ArticleDetailPageWrapper } from './Pages/ArticleDetailPage';
import { Products } from './Pages/Products';
import { ProductDetail } from './Pages/ProductDetail';
import { CartPage } from './Pages/CartPage';
import { CheckoutPage } from './Pages/CheckoutPage';
import { ScrollToTop } from './Components/ScrollToTop';

function App() {
  const [loading, setLoading] = useState(true);
  const [productItems, setProductItems] = useState([]);
  const [cartItems, setCartItems] = useState(localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []);
  const [searchParams, setSearchParams] = useSearchParams();
  const [keyword, setKeyword] = useState(() => {
    return searchParams.get('keyword') || '';
  });
  const [selectedFilter, setSelectedFilter] = useState();

  useEffect(() => {
    getAllProducts().then(({ data }) => {
      setProductItems(data);
      setLoading(false);
    });

    return () => {
      setLoading(true);
    };
  }, []);

  function onKeywordChangeHandler(keyword) {
    setKeyword(keyword);
    setSearchParams({ keyword });
  }

  function onSelectedFilterHandler(selectedFilter) {
    setSelectedFilter(selectedFilter);
  }

  function onAddHandler(productItem) {
    const productPresent = cartItems.find((cartItem) => cartItem.id === productItem.id);

    if (!productPresent) {
      setCartItems([...cartItems, { ...productItem, product_qty: 1 }]);
    } else {
      setCartItems(cartItems.map((cartItem) => (cartItem.id === productItem.id ? { ...productPresent, product_qty: productPresent.product_qty + 1 } : cartItem)));
    }
    localStorage.setItem('cartItems', JSON.stringify(cartItems));

    toast.success('Item ditambahkan', {
      position: "bottom-center",
      style: {
        "border": "1px solid #509d69",
        "backgroundColor": "#eff5f5",
        "color": "black", 
      }
    });
  }

  function onRemoveHandler(productItem) {
    const productPresent = cartItems.find((cartItem) => cartItem.id === productItem.id);
    if (productPresent.product_qty === 1) {
      setCartItems(cartItems.filter((cartItem) => cartItem.id !== productItem.id));
    } else {
      setCartItems(cartItems.map((cartItem) => (cartItem.id === productItem.id ? { ...productPresent, product_qty: productPresent.product_qty - 1 } : cartItem)));
    }
    toast.success('Item dihapus', {
      position: "bottom-center",
      style: {
        "border": "1px solid #509d69",
        "backgroundColor": "#eff5f5",
        "color": "black",
      }
    });
  }

  function onClearItemHandler(productItem) {
    setCartItems(cartItems.filter((cartItem) => cartItem.id !== productItem.id));
    toast.success('Item dihapus', {
      position: "bottom-center",
      style: {
        "border": "1px solid #509d69",
        "backgroundColor": "#eff5f5",
        "color": "black",
      }
    });
  }

  function onClearCartHandler() {
    setCartItems([]);
    toast.success('Semua item dihapus', {
      position: "bottom-center",
      style: {
        "border": "1px solid #509d69",
        "backgroundColor": "#eff5f5",
        "color": "black",
      }
    });
  }

  return (
    <>
      <main>
        <UserAuthContextProvider>
          <ScrollToTop />
          <Toaster />
          <Routes>
            {/* Not Found Page */}
            <Route path='*' element={<NotFoundPage />} />

            {/* Landing Page */}
            <Route path='/' element={<LandingPage />} />

            {/* Login Page */}
            <Route path='/login' element={<LoginPage />} />

            {/* Register Page */}
            <Route path='/register' element={<RegisterPage />} />

            {/* Admin Login Page */}
            <Route path='/admin-login' element={<AdminLoginPage />} />

            {/* Home Page */}
            <Route exact path='/home' element={
              <ProtectedRoute>
                <Navbar cartItems={cartItems} />
                <HomePage onAddHandler={onAddHandler} />
              </ProtectedRoute>
            } />

            {/* Products Page */}
            <Route path='/products' element={
              <ProtectedRoute>
                <Navbar cartItems={cartItems} />
                <Products
                  keyword={keyword}
                  keywordChange={onKeywordChangeHandler}
                  onAddHandler={onAddHandler}
                  selectedFilter={selectedFilter}
                  setSelectedFilter={onSelectedFilterHandler}
                  productItems={productItems}
                  loading={loading}
                />
              </ProtectedRoute>
            } />

            {/* Product Detail Page */}

            <Route path='/products/:id' element={
              <ProtectedRoute>
                <Navbar cartItems={cartItems} products={productItems} />
                <ProductDetail products={productItems} onAddHandler={onAddHandler} />
              </ProtectedRoute>
            } />

            {/* Articles Page */}
            <Route path='/articles' element={
              <ProtectedRoute>
                <Navbar cartItems={cartItems} />
                <Articles />
              </ProtectedRoute>
            } />

            {/* Article Detail Page */}
            <Route path='/articles/:id' element={
              <ProtectedRoute>
                <Navbar cartItems={cartItems} />
                <ArticleDetailPageWrapper />
              </ProtectedRoute>
            } />

            {/* Cart Page */}
            <Route path='/cart' element={
              <ProtectedRoute>
                <Navbar cartItems={cartItems} />
                <CartPage cartItems={cartItems} onAddHandler={onAddHandler} onRemoveHandler={onRemoveHandler} onClearItemHandler={onClearItemHandler} onClearCartHandler={onClearCartHandler} />
              </ProtectedRoute>
            } />

            {/* Checkout Page */}
            <Route path='/checkout' element={
              <ProtectedRoute>
                <Navbar cartItems={cartItems} />
                <CheckoutPage />
              </ProtectedRoute>
            } />

          </Routes>
        </UserAuthContextProvider>
      </main>
    </>
  );
}

export default App;
