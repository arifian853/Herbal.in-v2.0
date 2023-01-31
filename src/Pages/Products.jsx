import React from 'react';
import { Helmet } from 'react-helmet';
import { FooterInside } from '../Components/FooterInside';
import { SearchSection } from '../Components/SearchSection';
import { Link } from 'react-router-dom';
import { BsCartPlus } from 'react-icons/bs';
import { NumericFormat } from 'react-number-format';

export const Products = ({ productItems, onAddHandler, keyword, keywordChange, selectedFilter, setSelectedFilter, loading }) => {
  
  const searchProducts = productItems.filter((productItem) => productItem.product_name.toLowerCase().includes(keyword.toLowerCase())); 
  const ctgFilteredProducts = productItems.filter((productItem) => productItem.product_ctg === selectedFilter);
  const searchFilteredProducts = ctgFilteredProducts.filter((productItem) => productItem.product_name.toLowerCase().includes(keyword.toLowerCase())); 
  if (loading) {
    return (
      <div>
        <Helmet>
          <title>Herbal.in 2.0 - Produk</title>
        </Helmet>
        <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
      </div> 
    )
  }
  return(
    <>
      <div className='main-product-page'>
        <Helmet>
          <title>Herbal.in 2.0 - Produk</title>
        </Helmet>
        <h1 className='text-3xl font-black'>Produk Herbal.in</h1>
          <div className="search-container">
            <SearchSection keyword={keyword} keywordChange={keywordChange} selectedFilter={selectedFilter} setSelectedFilter={setSelectedFilter} />
          </div>
          <br />
          <div className="products-list">
          {
                    searchFilteredProducts.length > 0 ? 
                
                    searchFilteredProducts.map((productItem) => (

                  <div className="product-item" key={productItem.id}>
                      <img src={productItem.product_img} alt="Herbal.in Products" className="product-img" />
                      <div className="product-desc">
                        <p className='product-category'>{productItem.product_ctg}</p>
                        <p className='product-name font-black'><Link to={`/products/${productItem.id}`}>{productItem.product_name}</Link></p>
                        <p>Harga : <NumericFormat value={productItem.product_price} displayType={'text'} thousandSeparator={true} prefix={'Rp '} suffix={'.00,-'}/> </p>
                          <div className="flex items-center text-center">
                              <button className='btn-add-to-cart flex items-center justify-center text-sm gap-1' onClick={() => onAddHandler(productItem)}> Masuk Keranjang <BsCartPlus /> </button>
                          </div>
                      </div>
                  </div>
                        
                    )) 

                    :

                    searchProducts.map((productItem) => (
                    
                      <div className="product-item" key={productItem.id}>
                      <img src={productItem.product_img} alt="Herbal.in Products" className="product-img" />
                      <div className="product-desc">
                        <p className='product-category'>{productItem.product_ctg}</p>
                        <p className='product-name font-black'><Link to={`/products/${productItem.id}`}>{productItem.product_name}</Link></p>
                        <p>Harga : <NumericFormat value={productItem.product_price} displayType={'text'} thousandSeparator={true} prefix={'Rp '} suffix={'.00,-'}/> </p>
                          <div className="flex items-center text-center">
                              <button className='btn-add-to-cart flex items-center justify-center text-sm gap-1' onClick={() => onAddHandler(productItem)}> Masuk Keranjang <BsCartPlus /> </button>
                          </div>
                      </div>
                  </div>  
                    ))
                } 
                
          </div>
      </div>
    <FooterInside />
    </>
  )
}
