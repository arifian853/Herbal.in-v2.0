import React from 'react';
import { showFormattedDate } from '../Utils/ArticleFetcher';
import { Link } from 'react-router-dom';

export const ArticleItem = ({ id, createdAt, article_title, article_image, article_description }) => {
  return (
    <div className='article-item'>
        <div className="article-item-img">
          <img src={article_image} alt={`article_image id : ${id}`} />
        </div>
        <div className="article-specific">
            <h1 className='article-name text-1xl font-black'><Link to={`/articles/${id}`}>{article_title}</Link></h1>
            <p className='text-sm opacity-80'>{showFormattedDate(createdAt)}</p>
            <hr className='line-long' />
            <p className='article-item-desc'>{article_description}</p>
            <p className='article-name text-1xl font-black'><Link to={`/articles/${id}`}>Read More</Link></p>
        </div>
    </div>
  )
}
