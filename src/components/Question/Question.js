import { memo } from 'react';
import { Link } from 'react-router-dom';
import { array, string } from 'prop-types';
import TagLabel from '../TagLabel/TagLabel';
import './question.css';

Question.propTypes = {
  title: string,
  tags: array,
};

function Question({ title, tags }) {
  <li className="question">
    <Link className="mainlink" to="/questions" />
    <h3 className="question__title">{title}</h3>
    <div className="question__tags">
      {tags.map((tag) => (
        <TagLabel key={tag.id} name={tag.name} mod="_theme_white" />
      ))}
    </div>
  </li>;
}

export default memo(Question);
