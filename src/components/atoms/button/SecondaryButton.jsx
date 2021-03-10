import React from 'react';
import styled from 'styled-components';
import { BaseButton } from './BaseButton';
export const SecondaryButton = (props) => {
  // eslint-disable-next-line react/prop-types
  const { children } = props;
  return <SButton>{children}</SButton>;
};

const SButton = styled(BaseButton)`
  background-color: #11999e;
`;
