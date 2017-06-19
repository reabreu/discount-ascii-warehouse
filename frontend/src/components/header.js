import React from 'react';
import styled from 'styled-components';
import SponsorBlock from '../containers/sponsor_block';

const Header = styled.header`
  padding-bottom: 20px;
  border-bottom: 1px solid grey;
`;

const Title = styled.h1`
  font-size: 44px;
  font-weight: normal;
  text-align: center;

  @media (max-width: 600px) {
    font-size: 24px;
  }
`;

const DefaultParagraph = styled.p`
  font-size: 16px;
  font-weight: lighter;
`;

export default function () {
  return (
    <Header>
      <Title>Discount Ascii Warehouse</Title>
      <DefaultParagraph>
        Here you&apos;re sure to find a bargain on some of the finest ascii
        available to purchase.
        Be sure to peruse our selection of ascii faces in an exciting range of
        sizes and prices.
      </DefaultParagraph>
      <DefaultParagraph>
        But first, a word from our sponsors:
      </DefaultParagraph>
      <SponsorBlock />
    </Header>
  );
}
