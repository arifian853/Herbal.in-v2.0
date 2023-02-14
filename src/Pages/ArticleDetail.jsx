import React from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

export const ArticleDetail = ({ articles }) => {
  let { id } = useParams();
  const article =  articles[(id-1)];
  const { article_title, article_image, createdAt, article_description } = article;
  
  return (
    <div>
        <Helmet>
          <title>Herbal.in 2.0 - {id}</title>
        </Helmet>
        <p>{article_title}</p>
    </div>
  )
}
