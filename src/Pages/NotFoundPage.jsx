import React from 'react'; 
import { AiOutlineStop } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

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
            <span className='text-green-900'><u> <Link to='/'> <p> Kembali ke halaman utama</p> </Link> </u></span>
        </div>
    </div>
  )
}
