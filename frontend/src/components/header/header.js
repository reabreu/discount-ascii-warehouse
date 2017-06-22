import React from 'react';
import SponsorBlock from '../../containers/sponsor_block/sponsor_block';
import CatalogBrowser from '../../components/catalog_browser/catalog_browser';
import HeaderStyle from './header_style';
import DefaultParagraph from '../../../styles/default_paragraph';
import { heading1 } from '../../../styles/headings';

const Heading1 = heading1();

export default function () {
  return (
    <div>
      <HeaderStyle>
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
      </HeaderStyle>
      <CatalogBrowser />
    </div>
  );
}
