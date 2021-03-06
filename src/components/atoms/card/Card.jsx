import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const Card = (props) => {
  Card.propTypes = {
    children: PropTypes.string.isRequired,
  };
  const { children } = props;

  return <SCard>{children}</SCard>;
};

const SCard = styled.div`
  background-color: #fff;
  box-shadow: #ddd 0px 0px 4px 2px;
  padding: 16px;
  border-radius: 8px;
`;
