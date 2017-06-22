import React from 'react';
import CatalogListStyle from './catalog_list_style';
import Loader from '../../components/loader/loader';
import CatalogItem from '../../components/catalog_item/catalog_item';
import SponsorBlock from '../../containers/sponsor_block/sponsor_block';
import CatalogItemStyle from '../catalog_item/catalog_item_style';
import { CATALOG_PER_PAGE } from '../../config';

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
