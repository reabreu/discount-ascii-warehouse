import React from 'react';
import styled from 'styled-components';
import Header from './header';

const AppWrapper = styled.div`
  font-family: 'Roboto', sans-serif;
  padding: 0 15px;
  max-width: 1024px;
  margin: 0 auto;
  width: 100%;
`;

export default function () {
  return (
    <AppWrapper>
      <Header />
    </AppWrapper>
  );
}
