import React from 'react';

const SearchBar = () => {
  const SearchBarStyles = {
    width: '40rem',
    height: '3rem',
    borderRadius: '3rem',
    border: '1px solid gray',
    position: 'relative',
    fontFamily: 'Oswald, sans-serif',
    margin: '0 auto',
  };

  const ButtonStyles = {
    position: 'absolute',
    border: 'none',
    backgroundColor: 'white',
    borderRadius: '1rem',
    marginLeft: '575px',
  };

  const FormStyles = {
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };
  return (
    <form style={FormStyles} action="mazda">
      <input style={SearchBarStyles}></input>

      <button style={ButtonStyles} type="submit">
        <img
          src="/static/magnifying-glass.png"
          width="20"
          height="20"
          alt="accident"
        />{' '}
      </button>
    </form>
  );
};

export default SearchBar;
