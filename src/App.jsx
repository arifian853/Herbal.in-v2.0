import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';

import { UserAuthContextProvider } from './Context/UserAuthContext';
import { ProtectedRoute } from './Components/ProtectedRoute';
import { LandingPage } from './Pages/LandingPage';
import { LoginPage } from './Pages/LoginPage';
import { RegisterPage } from './Pages/RegisterPage';
import { AdminLoginPage } from './Pages/AdminLoginPage';
import { NotFoundPage } from './Pages/NotFoundPage';
import { HomePage } from './Pages/HomePage';


function App() {
  return (
    <>
      <main>
        <UserAuthContextProvider>
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
            
            <Route path='/home' element={
              <ProtectedRoute>
                  <HomePage />
              </ProtectedRoute>
            } />
          </Routes>
        </UserAuthContextProvider>
      </main>
    </>
  );
}

export default App;
