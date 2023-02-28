import React from 'react';
import { Link } from 'react-router-dom';
import { FaRegTrashAlt } from 'react-icons/fa';
import { TbDatabaseOff } from 'react-icons/tb';
import { NumericFormat } from 'react-number-format';
import { Helmet } from 'react-helmet';

export const CartPage = ({ cartItems, onAddHandler, onRemoveHandler, onClearItemHandler, onClearCartHandler }) => {
  return (
    <div className='cart-page p-5'>
      <h1 className='text-3xl font-black text-center pb-4'>Keranjang belanja</h1>
      <Helmet>
        <title>Herbal.in 2.0 - Keranjang</title>
      </Helmet>
      <hr className='line-short' />
      {
        cartItems.length === 0 ? (
          <div className='no-items-cart font-black'>
            <div className="no-item-logo">
            <TbDatabaseOff /> 
            </div>
            Tidak ada item di dalam keranjang <br />

            Silahkan tambahkan produk terlebih dahulu :) <br />

            Selamat berbelanja !
          </div>
        ) : (
          <>
            {localStorage.setItem('cartItems', JSON.stringify(cartItems))}
            <table key={cartItems}>
              <thead>
                <tr>
                  <th>Gambar Produk</th>
                  <th>Nama Produk</th>
                  <th>Jumlah Produk</th>
                  <th>Harga Satuan</th>
                  <th>Total</th>
                  <th></th>
                </tr>
              </thead>

              <tbody>
                {cartItems.map((cartItem) => (
                  <tr className="cart-item" key={cartItem.id}>
                    <td>
                      <img className="cart-item-img" src={cartItem.product_img} alt={cartItem.product_name} />
                    </td>

                    <td>
                      <div>
                        <p>{cartItem.product_name}</p>
                        <p>{cartItem.product_ctg}</p>
                      </div>
                    </td>

                    <td>
                      <div className="cart-item-button-group">
                        <button onClick={() => onRemoveHandler(cartItem)}> - </button>
                        <p>{cartItem.product_qty}</p>
                        <button onClick={() => onAddHandler(cartItem)}> + </button>
                        {localStorage.setItem('cartItems', JSON.stringify(cartItems))}
                      </div>
                    </td>

                    <td>
                      <div className="total-price-per-item-text">
                        {cartItem.product_qty} x <NumericFormat value={cartItem.product_price} displayType={'text'} thousandSeparator={true} prefix={' Rp. '} />
                      </div>
                    </td>

                    <td>
                      <div className="total-price-per-item">
                        <NumericFormat value={cartItem.product_qty * cartItem.product_price} displayType={'text'} thousandSeparator={true} prefix={' Rp. '} />
                      </div>
                    </td>

                    <td>
                      <div className="remove-item">
                        <button onClick={() => onClearItemHandler(cartItem)}>
                          <FaRegTrashAlt />
                        </button>

                        {localStorage.setItem('cartItems', JSON.stringify(cartItems))}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>

              <tfoot>
                <tr className="cart-page-bottom">
                  <td>
                    <button className="clear-all-button" onClick={() => onClearCartHandler()}>
                      Hapus Semua <FaRegTrashAlt />
                    </button>
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>

                  <td>
                    <div className="total-price-all-items">
                      <p>
                        Total Harga :
                        <NumericFormat value={cartItems.reduce((prevItem, currentItem) => prevItem + currentItem.product_qty * currentItem.product_price, 0)} displayType={'text'} thousandSeparator={true} prefix={'  Rp. '} />
                      </p>
                    </div>
                  </td>

                  <td>
                    <Link to={`/checkout`}>
                      <p className="cart-page-buy-now">Beli</p>
                    </Link>
                  </td>
                </tr>
              </tfoot>
            </table>
          </>
        )
      }
    </div>
  )
}
