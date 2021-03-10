import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header>
      <Link to="/">Home</Link>
      <Link>about</Link>
    </header>
  );
};
