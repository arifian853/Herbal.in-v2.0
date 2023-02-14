import React from 'react'; 
import { AiOutlineStop } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import { BsArrowLeftShort } from 'react-icons/bs';
import { AiOutlineHome } from 'react-icons/ai';

export const NotFoundPage = () => {
  return (
    <div className='not-found-404'>
        <div className="not-found">
        <Helmet>
          <title>Page Not Found</title>
        </Helmet>
        <h1 className='text-3xl font-black'>Halaman tidak ditemukan</h1>
        <h1 className='text-5xl font-black flex align-middle text-center justify-center p-4'><AiOutlineStop /> </h1>
        <hr class="border-1 border-black m-3 drop-shadow-xl"/>
        <p>Sepertinya halaman yang anda cari tidak ditemukan :)</p>
           <div className="flex justify-center items-center p-1">
            <span> <Link to='/home'> <p className=' text-green-900 border rounded-lg border-green-900 m-2 p-2 hover:bg-green-200 text-3xl'> <BsArrowLeftShort /></p> </Link> </span>
            <span> <Link to='/'> <p className=' text-green-900 border rounded-lg border-green-900 m-2 p-2 hover:bg-green-200 text-3xl'> <AiOutlineHome /></p> </Link> </span>
           </div>
        </div>
    </div>
  )
}
