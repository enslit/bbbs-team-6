import { memo } from 'react';
import { Link } from 'react-router-dom';
import { object } from 'prop-types';
import './article.css';

Article.propTypes = {
  article: object,
};

function Article({ article }) {
  return (
    <article className="preview-article" style={{ background: article.color }}>
      <Link className="mainlink" to="/read-and-watch/articles" />
      <h2 className="preview-article__title">{article.title}</h2>
      <Link className="preview-article__link" to="/read-and-watch/articles">
        читать статью
      </Link>
    </article>
  );
}

export default memo(Article);
