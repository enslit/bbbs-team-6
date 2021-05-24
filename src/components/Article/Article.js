import { memo } from 'react';
import { object } from 'prop-types';
import './article.css';

Article.propTypes = {
  article: object,
};

function Article({ article }) {
  return (
    <article className="preview-article" style={{ background: article.color }}>
      <a className="mainlink" href="#" />
      <h2 className="preview-article__title">{article.title}</h2>
      <a className="preview-article__link" href="#">
        читать статью
      </a>
    </article>
  );
}

export default memo(Article);
