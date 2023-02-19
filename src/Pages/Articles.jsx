import { React, useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { ArticleBody } from '../Components/ArticleBody';
import { getArticles } from '../Utils/ArticleFetcher';
import { FooterInside } from '../Components/FooterInside';

export const Articles = () => {
  const [loading, setLoading] = useState(true);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getArticles().then(({ data }) => {
      setArticles(data);
      setLoading(false);
    });

    return () => {
      setLoading(true);
    }
  }, []);

  if (loading) {
    return (
      <div className="loading">
        <span class="loader"></span>
      </div>
    )
  }
  return (
    <div>
      <Helmet>
        <title>Herbal.in 2.0 - Artikel</title>
      </Helmet>
      <ArticleBody articles={articles} />
      <FooterInside />
    </div>
  )
}
