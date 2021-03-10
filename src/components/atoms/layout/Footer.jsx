import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer>
      <Link to="/">Home</Link>
      <Link>about</Link>
    </footer>
  );
};
