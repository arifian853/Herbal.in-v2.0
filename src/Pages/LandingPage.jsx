import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Offer } from '../Components/Offer';
import { BsGithub, BsLinkedin, BsInstagram } from 'react-icons/bs';

export const LandingPage = () => {
  return (
    <>
    <Helmet>
        <title>Herbal.in 2.0</title>
    </Helmet>
        <div className="navbar-landing">
            <a href="#home">Home</a>
            <a href="#testimoni">Testimoni</a>
            <a href="#offer">Offer</a>
            <a href="#contact">About Us</a>
        </div>
    <div className='landing-page-container'>
       <div className="landing-page-main">
            <div className="left-landing">
                <div className="greeting">
                    <img src="../Assets/leaf.png" alt="Logo Herbal.in" />
                    <h1>Selamat Datang di Herbal.in !</h1>
                    <p>Temukan obat - obatan herbal terbaik dari seluruh Indonesia disini</p>
                </div>
            </div>

            <div className="right-landing">
                <Link to='/login'>
                <button>
                    Selengkapnya
                </button>
                </Link>
            </div>
       </div>

       <div className="testimoni" id="testimoni">
        <h1 className="landing-page-titles">What do they say ?</h1>
            <div className="point-container">
                <div className="testimoni-points">
                    Obat-obatan Herbal sangat bermanfaat buat kesehatan dan terbuat dari bahan-bahan alami. Sehingga, menurut saya obat herbal merupakan solusi yang tepat buat kesehatan. <br /> <br />
                    <p className='name italic'>- Stevan Levis</p>
                </div>
                <div className="testimoni-points">
                    Saya percaya bahwa obat-obatan herbal relatif aman dikonsumsi dan berkhasiat. Sehingga, saya dan keluarga merasa lebih aman dan nyaman saat mengonsumsinya.  <br /> <br />
                    <p className='name italic'>- Darren Herianto</p>
                </div>
                <div className="testimoni-points">
                    Saya tipikal orang yang mengonsumsi obat herbal saat sedang sakit. Dengan harga yang lebih terjangkau, saya dapat merasakan banyak manfaat untuk kesehatan saya.  <br /> <br />
                    <p className='name italic'>- Ariv Morris</p>
                </div>
            </div>
       </div>
        <br />
       <div id="offer">
        <h1 className="landing-page-titles">Special For You</h1>
        <Offer />
       </div>

       <div id="contact">
       <h1 className="landing-page-titles">Our Teams</h1>
        <div className='contact-container'>

            <div className="contact-item">
            <img className="profile-img" src="../Assets/Foto_Arifian.jpg" alt="" />
            <h1 className="text-2xl pt-3 text-white font-black">Arifian Saputra</h1>
            <div className="p-4 text-white">
            <hr class="border-1 drop-shadow-xl"/>
            <p className='desc text-sm text-justify p-2'> Halo ! , saya Arifian Saputra, saat ini saya sedang berfokus belajar Front-End dan Back-End Web Development. Saya saat ini berkuliah di jurusan Teknik Informatika di Universitas Maritim Raja Ali Haji, Tanjungpinang. Senang berjumpa dengan anda !</p>
            <div className="flex flex-row justify-center gap-6 pt-3">
                <a className="social-links text-3xl" href="https://github.com/arifian853" target="_blank" rel="noreferrer">
                    <BsGithub />
                </a>
                <a className="social-links text-3xl" href="https://www.linkedin.com/in/arifian-saputra-08135a178" target="_blank" rel="noreferrer">
                    <BsLinkedin />
                </a>
                <a className="social-links text-3xl" href="https://www.instagram.com/arifiansaputra_/"  target="_blank" rel="noreferrer">
                    <BsInstagram />
                </a>
            </div>
            </div>
            </div>

            <div className="contact-item">
            <img className="profile-img" src="../Assets/Foto_Dhafin.jpeg" alt="" />
            <h1 className="text-2xl pt-3 text-white font-black">Dhafin Almas N.</h1>
            <div className="p-4 text-white">
            <hr class="border-1 drop-shadow-xl"/>
            <p className='desc text-sm text-justify p-2'> Hallo! Panggil aja Dhafin. Aku sangat tertarik untuk mempelajari Front-End dan juga mencoba tantangan dalam hal baru, Aku juga sedang kuliah di Institut Teknologi Sepuluh Nopember di Jurusan Teknik Informatika. Salam Kenal !!!</p>
            <div className="flex flex-row justify-center gap-6 pt-3">
                <a className="social-links text-3xl" href="https://github.com/fhinnn" target="_blank" rel="noreferrer">
                    <BsGithub />
                </a>
                <a className="social-links text-3xl" href="https://www.linkedin.com/in/dhafin-almas-nusantara-a0b408223/" target="_blank" rel="noreferrer">
                    <BsLinkedin />
                </a>
                <a className="social-links text-3xl" href="https://www.instagram.com/dhafin_almas/"  target="_blank" rel="noreferrer">
                    <BsInstagram />
                </a>
            </div>
            </div>
            </div>

            <div className="contact-item">
            <img className="profile-img" src="../Assets/Foto_Vanessa.jpeg" alt="" />
            <h1 className="text-2xl pt-3 text-white font-black">Vanessa Leonora</h1>
            <div className="p-4 text-white">
            <hr class="border-1 drop-shadow-xl"/>
            <p className='desc text-sm text-justify p-2'> Halo, namaku Vanessa ! Aku berkuliah di Universitas Mikroskil dengan jurusan Teknik Informatika. Saat ini aku sedang berfokus dalam bidang Front-End Development.</p>
            <div className="flex flex-row justify-center gap-6 pt-3">
                <a className="social-links text-3xl" href="https://github.com/VanessaLeo24" target="_blank" rel="noreferrer">
                    <BsGithub />
                </a>
                <a className="social-links text-3xl" href="https://www.linkedin.com/in/vanessa-leonora" target="_blank" rel="noreferrer">
                    <BsLinkedin />
                </a>
                <a className="social-links text-3xl" href="https://www.instagram.com/vanessa_leonora77/" target="_blank" rel="noreferrer">
                    <BsInstagram />
                </a>
            </div>
            </div>
            </div>

            <div className="contact-item">
            <img className="profile-img" src="../Assets/Foto_Yusril.jpeg" alt="" />
            <h1 className="text-2xl pt-3 text-white font-black">Yusril Ramadhan</h1>
            <div className="p-4 text-white">
            <hr class="border-1 drop-shadow-xl"/>
            <p className='desc text-sm text-justify p-2'>Halo, nama aku Yusril Ramadhan. Boleh dipanggil Yusril. Aku saat ini sedang berkuliah di Universitas Telkom di Jurusan Informatika. Sekarang sedang berfokus di bidang Front-End Web Development.</p>
            <div className="flex flex-row justify-center gap-6 pt-3">
                <a className="social-links text-3xl" href="https://github.com/yusrilramadhan23" target="_blank" rel="noreferrer">
                    <BsGithub />
                </a>
                <a className="social-links text-3xl" href="https://www.linkedin.com/in/yusril-ramadhan-83a222221/" target="_blank" rel="noreferrer">
                    <BsLinkedin />
                </a>
                <a className="social-links text-3xl" href="https://www.instagram.com/yusrilramadhan23/" target="_blank" rel="noreferrer">
                    <BsInstagram />
                </a>
            </div>
            </div>
            </div>
        </div>
       </div>

    </div>
    <footer>
        <p>Copyright © 2023 Herbal.in - C22-05. All Rights Reserved.</p>
        <Link to="/admin-login">
            <p className="underline">Admin Login</p>
        </Link>
    </footer>
    </>
  )
}
