import React from 'react';
import CatalogListStyle from '../../styles/catalog_list';
import Loader from '../components/loader';
import CatalogItem from '../components/catalog_item';
import SponsorBlock from '../containers/sponsor_block';
import CatalogItemStyle from '../../styles/catalog_item';
import { CATALOG_PER_PAGE } from '../config';

export default function ({ catalog, ads, loading, fullCatalog, renderFullCatalog }) {
  const renderItems = () => {
    const toRender = [];
    const toProcess = catalog.slice();
    let key = 0;

    if (!renderFullCatalog) {
      toProcess.splice(catalog.length - CATALOG_PER_PAGE - 1, CATALOG_PER_PAGE);
    }

    toProcess.forEach((item, index) => {
      toRender.push(<CatalogItem item={item} key={item.id} />);

      if (ads.length) {
        if ((index + 1) !== 0 && (index + 1) % 20 === 0) {
          toRender.push(<SponsorBlock key={ads[key]} adId={`${key}-${ads[key]}`} />);
          key += 1;
        }
      }
    });

    return toRender;
  };

  const renderLoader = () => {
    if (loading) {
      return (
        <div className="loader-wrapper">
          <Loader />
        </div>
      );
    }
  };

  const renderEndofCatalog = () => {
    if (fullCatalog) {
      return (
        <CatalogItemStyle>
          <p>~ end of catalogue ~</p>
        </CatalogItemStyle>
      );
    }
  };

  return (
    <CatalogListStyle className="search-list">
      <div className="results">
        {renderItems()}
      </div>
      {renderEndofCatalog()}
      {renderLoader()}
    </CatalogListStyle>
  );
}
