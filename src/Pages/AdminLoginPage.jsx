import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link, useNavigate } from 'react-router-dom';
import { useUserAuth } from '../Context/UserAuthContext';
import toast, { Toaster } from 'react-hot-toast';

export const AdminLoginPage = () => {
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
        navigateAfter('/admin-home');
    }catch (err) {
        setError(err.message);
    }
  }

  useEffect(() => {
    if(error) {
        toast.error(`${error}`, {
            position: "top-right",
            style: {
              "border" : "2px solid #509d69"
            }
        });
    } 
  }, [error]);

  return (
    <div className='login-page'>
    <Helmet>
        <title>Herbal.in 2.0 - Admin Login</title>
    </Helmet>
    <Toaster />
        <div className="left-side-login">
            <h1 className='text-4xl font-black'>Selamat Datang, Admin!</h1>
            <img src="./Assets/leaf.png" alt="" />
        </div>
        <div className="right-side-login">
          <div className="form">
            <h1 className='text-4xl font-black text-center'>Admin Login </h1>
            <br />
            <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label> <br />
              <input type="email" name="email" id="email" placeholder='Masukkan Email' onChange={(e) => setEmail(e.target.value)}/> <br /> <br />
            <label htmlFor="password">Kata Sandi</label> <br /> 
              <input type="password" name="password" id="password" placeholder='Masukkan Kata Sandi' onChange={(e) => setPassword(e.target.value)}/>
              <br /><br />
              <button className='btn-login-register'>Login</button>
              <br />
              <p>Login <Link to='/login'><span className='text-green-900'><u>Pengguna</u></span></Link></p>
              <p><Link to='/'><span className='text-green-900'><u>Batal</u></span></Link></p>
            </form>
          </div>
        </div>
    </div>
  )
}
