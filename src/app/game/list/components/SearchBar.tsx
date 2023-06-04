import React from 'react';

function SearchBar() {
  return (
    <div
      style={{
        display: 'flex',
        flex: 1,
      }}
    >
      <div
        style={{
          display: 'flex',
          flex: 1,
          backgroundColor: 'white',
          margin: 20,
          height: 40,
          border: '1px solid #000',
          borderRadius: 10,
          justifyContent: 'center',
          overflow: 'hidden',
          alignItems: 'center',
        }}
      >
        <input
          className="searchInput"
          style={{ border: 'none', flex: 1, fontSize: 20 }}
        />
      </div>
    </div>
  );
}

export default SearchBar;
