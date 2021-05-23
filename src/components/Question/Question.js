import { memo } from 'react';
import { object } from 'prop-types';
import { Link } from 'react-router-dom';
import './question.css';
import TagLabel from '../TagLabel/TagLabel';

Question.propTypes = {
  question: object,
};

function Question({ question }) {
  return (
    <li className="question">
      <Link className="mainlink" to="/questions" />
      <h3 className="question__title">{question.title}</h3>
      <ul className="question__tags">
        {question.tags.map((tag) => (
          <TagLabel key={tag.id} name={tag.name} mod="_theme_white" />
        ))}
      </ul>
    </li>
  );
}

export default memo(Question);
