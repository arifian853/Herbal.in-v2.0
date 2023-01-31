import React from 'react';
import { ArticleItem } from './ArticleItem';

export const ArticleBody = ({ articles }) => {
  return (
    <div className='main-article-page'>
        <h1 className='text-3xl font-black'>Artikel Kesehatan Herbal.in</h1>
        <p>Artikel dibuat oleh sumber - sumber terpercaya</p>
        <div className="articles-list">
            {
                articles.map((article) => (
                    <ArticleItem key={article.id} id={article.id} article_title={article.article_title} article_image={article.article_image} createdAt={article.createdAt} article_description={article.article_description} />
                ))
            }
        </div>
    </div>
  )
}
