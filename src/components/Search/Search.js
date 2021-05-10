import React, { useState } from 'react';

function Search() {
  const [value, setValue] = useState('');

  const handleInput = (evt) => {
    setValue(evt.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Поиск"
        name="search"
        value={value}
        onInput={handleInput}
      />
    </div>
  );
}

export default Search;
