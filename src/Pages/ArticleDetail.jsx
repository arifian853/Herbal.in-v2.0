import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { BsArrowLeftShort } from 'react-icons/bs';
import { showFormattedDate } from '../Utils/ArticleFetcher';
import { FooterInside } from '../Components/FooterInside';

export const ArticleDetail = ({ createdAt, article_title, article_image, article_description, article_author }) => {

  return (
    <>
      <div className='article-details-wrapper'>
        <Helmet>
          <title>Herbal.in 2.0 - {article_title}</title>
        </Helmet>
        <Link to='/articles'>
          <div>
            <button className='btn-back flex items-center justify-center text-sm gap-1'>  <BsArrowLeftShort /> Kembali </button>
          </div>
        </Link>
        <div className="article-details">
          <div className="details">
            <img src={article_image} alt={article_title} />
            <h1 className='text-3xl font-black text-left leading-relaxed'>{article_title}</h1>
            <p className='text-sm opacity-80'>{showFormattedDate(createdAt)}</p>
            <br />
            <p>Oleh : {article_author}</p>
            <br />
            <p className='indent-10 leading-relaxed text-justify'>{article_description}</p>
          </div>
        </div>
      </div>
      <FooterInside />
    </>
  )
}
