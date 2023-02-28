import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link, useNavigate } from 'react-router-dom';
import { useUserAuth } from '../Context/UserAuthContext';
import toast, { Toaster } from 'react-hot-toast';

export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { loginFunc } = useUserAuth();

  const navigateAfter = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
        await loginFunc(email, password); 
        navigateAfter('/home');
    }catch (err) {
        setError(err.message);
    }
  }

  useEffect(() => {
    if(error) {
        toast.error(`${error}`, {
            position: "bottom-center",
            style: {
              "border": "1px solid #509d69",
              "backgroundColor": "#eff5f5",
              "color": "black",
            }
        });
    } 
  }, [error]);

  return (
    <div className='login-page'>
    <Helmet>
        <title>Herbal.in 2.0 - Login</title>
    </Helmet>
    <Toaster />
        <div className="left-side-login">
            <h1 className='text-4xl font-black'>Selamat Datang Kembali !</h1>
            <img src="./Assets/leaf.png" alt="" />
        </div>
        <div className="right-side-login">
          <div className="form">
            <h1 className='text-4xl font-black text-center'> Login </h1>
            <br />
            <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label> <br />
              <input type="email" name="email" id="email" placeholder='Masukkan Email' onChange={(e) => setEmail(e.target.value)}/> <br /> <br />
            <label htmlFor="password">Kata Sandi</label> <br /> 
              <input type="password" name="password" id="password" placeholder='Masukkan Kata Sandi' onChange={(e) => setPassword(e.target.value)} />
              <br /><br />
              <button className='btn-login-register'>Login</button>
              <p>Belum punya akun ? <Link to="/register"><span className='text-green-900'><u>Daftar disini</u></span></Link></p>
              <p><Link to="/"><span className='text-green-900'><u>Batal</u></span></Link></p>
            </form>
          </div>
        </div>
    </div>
  )
}
