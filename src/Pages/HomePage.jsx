import React from 'react';

import { getProdOffers } from '../Utils/prodOffersLocal';
import { Link } from 'react-router-dom';
import { NumericFormat } from 'react-number-format';
import { Helmet } from 'react-helmet';

import { ImPriceTags } from 'react-icons/im';
import { MdHealthAndSafety } from 'react-icons/md';
import { BsBagCheckFill } from 'react-icons/bs';


export const HomePage = () => {
  const productsOffer = getProdOffers();

  return (
   <>
   <Helmet>
        <title>Herbal.in 2.0 - Home</title>
   </Helmet>
    <div className="homepage-main-body">
        <div className="homepage-main-banner">
            <h1 className='text-3xl font-black'>Selamat Datang di Herbal.in!</h1>
            <br /><br /><hr className='homepage-line'/> <br /><br />
            
            <div className="banner-desc">
                <p>Obat herbal adalah produk botani alami yang berasal dari tumbuhan. Obat-obatan herbal dapat membantu mengobati berbagai kondisi, dan dalam beberapa kasus, mungkin memiliki efek samping yang lebih sedikit daripada beberapa obat konvensional. Mereka dijual sebagai tablet, kapsul, bubuk, teh, ekstrak, dan tanaman segar atau kering.</p>
                <br />
                <p>Apakah Anda siap untuk melihat bagaimana obat-obatan herbal dapat bekerja untuk Anda? Ambil sekarang! <b>Karena kesehatan Anda penting!</b></p>
            </div>
            <br /><br />
            <div className="jargon">
                <div className="jargon-points">
                    <ImPriceTags /> Special Price
                </div>
                <div className="jargon-points">
                    <MdHealthAndSafety /> 100% Natural
                </div>
                <div className="jargon-points">
                    <BsBagCheckFill /> Fast and Easy
                </div>
            </div>
        </div>
        <h1 className='text-3xl font-black'>Special Offers</h1>
        <hr className='homepage-line'/>
        <div className="homepage-main-offers">
            {
                productsOffer.map((productOffer) => (
                    <div className="product-item shadow-lg">
                        <img src={productOffer.product_img} alt="Product Offers" className="product-img" />
                        <div className="product-desc">
                        <p className='product-category'>{productOffer.product_ctg}</p>
                        <p className='product-name font-black'><Link to={`/products/${productOffer.id}`}>{productOffer.product_name}</Link></p>
                        <p>Harga : <NumericFormat value={productOffer.product_price} displayType={'text'} thousandSeparator={true} prefix={'Rp '} suffix={'.00,-'}/> </p>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
   </>
  )
}
