import React from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { NumericFormat } from 'react-number-format';
import { BsCartPlus } from 'react-icons/bs';

export const ProductDetail = ({ products, onAddHandler }) => {
  let { id } = useParams();
  const product = products[(id-1)];
  const { product_name, product_img, product_desc, product_price, product_ctg } = product;
  return (
    <div className='product-detail-page'>
        <Helmet>
          <title>Herbal.in 2.0 - {product_name}</title>
        </Helmet>
      <div className="product-detail-head">
        <img className='product-detail-head-img' src={product_img} alt={product_name} />
        <div className="product-names">
          <h1 className='text-2xl font-black'>{product_name}</h1>
          <p>Harga : <NumericFormat value={product_price} displayType={'text'} thousandSeparator={true} prefix={'Rp '} suffix={'.00,-'}/></p>
          <p>Kategori : {product_ctg}</p>
        </div>
        <div className="flex items-center text-center">
          <button className='btn-add-to-cart flex items-center justify-center text-sm gap-1' onClick={() => onAddHandler(product)}> Masuk Keranjang <BsCartPlus /> </button>
        </div>
      </div>
      <div className="product-detail-desc">
        <p>{product_desc}</p>
      </div>
    </div>
  )
}
