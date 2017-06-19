import React from 'react';
import SponsorBlock from '../containers/sponsor_block';
import CatalogBrowser from '../components/catalog_browser';
import Heading1 from '../../styles/heading_1';
import Header from '../../styles/header';
import DefaultParagraph from '../../styles/default_paragraph';

export default function () {
  return (
    <div>
      <Header>
        <Heading1>Discount Ascii Warehouse</Heading1>
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
      <CatalogBrowser />
    </div>
  );
}
