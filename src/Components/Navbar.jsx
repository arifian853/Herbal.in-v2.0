import { React, useState, useEffect } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { Link, useLocation } from 'react-router-dom';
import { useUserAuth } from '../Context/UserAuthContext';
import { FiLogOut } from 'react-icons/fi';

export const Navbar = () => {
  const { logOut } = useUserAuth();
  const handleLogout = async () => {
      try {
        await logOut();
      } catch (err) {
        console.log(err.message);
      }
    };

  const [open, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('Home');
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === '/home') {
      setActiveTab('Home');
    } else if (location.pathname === '/articles') {
      setActiveTab('Articles');
    } else if (location.pathname === '/products') {
      setActiveTab('Products');
    } else if (location.pathname === '/cart') {
      setActiveTab('Cart');
    } else {
      setActiveTab('');
    }
  }, [location]);

  return (
    <nav className='nav-main shadow-lg w-full top-0 left-0'>
        <div className='md:flex items-center justify-between py-4 md:px-10 px-7'> 
            <div className="logo flex items-center justify-center gap-2">
                <img className='w-10' src="./Assets/leaf.png" alt="" /> <h1 className='text-2xl font-black'>Herbal.in 2.0</h1>
            </div> 
            <div onClick={()=>setOpen(!open)} className='flex items-center p-2 text-4xl absolute right-8 top-4 cursor-pointer md:hidden transition-all duration-500 ease-in'>
                {
                open === false ? (
                    <IoIosArrowDown />
                ) : (
                    <IoIosArrowUp />
                )
                    
                }
            </div>
            <div className="right-nav flex items-center flex-wrap justify-between gap-8">
                <ul className={`nav-item md:flex items-center md:pb-0 pb-1 md:pt-0 pt-1 md:mt-0 -mt-5 absolute md:static md:z-auto z-[2] left-0 w-full md:w-auto md:pl-0 transition-all duration-500 ease-in ${open ? 'top-20 opacity-100' : 'top-[-450px]'}`}>
                    <Link to='/home'> 
                        <li className={`p-3 ${activeTab === 'Home' ? 'nav-links' : ''}`} onClick={() => setActiveTab('Home')}>
                            Home
                        </li>
                    </Link>
                    <Link to='/products'>
                        <li className={`p-3 ${activeTab === 'Products' ? 'nav-links' : ''}`} onClick={() => setActiveTab('Products')}>
                            Produk
                        </li>
                    </Link>
                    <Link to='/articles'>
                        <li className={`p-3 ${activeTab === 'Articles' ? 'nav-links' : ''}`} onClick={() => setActiveTab('Articles')}>
                            Artikel
                        </li>
                    </Link>
                    <Link to='/cart'>
                        <li className={`p-3 ${activeTab === 'Cart' ? 'nav-links' : ''}`} onClick={() => setActiveTab('Cart')}>
                            Keranjang
                        </li>
                    </Link>
                    <li className='p-3 btn-logout flex items-center gap-2' onClick={handleLogout}>
                        Logout
                        <FiLogOut />
                    </li>
                   
                </ul>
                
            </div>
        </div>
    </nav>
  )
}
