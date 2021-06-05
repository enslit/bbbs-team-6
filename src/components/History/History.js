import { memo } from 'react';
import { Link } from 'react-router-dom';
import { object } from 'prop-types';
import './history.css';

History.propTypes = {
  history: object,
};

function History({ history }) {
  return (
    <div
      className="story"
      style={{ backgroundImage: `url(${history.imageUrl})` }}
    >
      <Link className="mainlink" to="/histories">
        <h3 className="story__title">{history.title}</h3>
      </Link>
    </div>
  );
}

export default memo(History);
