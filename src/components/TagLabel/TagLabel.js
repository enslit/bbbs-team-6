import { memo } from 'react';
import { string } from 'prop-types';
import './tag-label.css';

TagLabel.propTypes = {
  name: string,
  mod: string, // модификатор в виде _type_style
};

function TagLabel({ name, mod }) {
  return <li className={`tag ${mod ? 'tag' + mod : ''}`}>{name}</li>;
}

export default memo(TagLabel);
