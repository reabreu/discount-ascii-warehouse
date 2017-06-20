import React from 'react';
import CatalogListStyle from '../../styles/catalog_list';
import Loader from '../components/loader';
import CatalogItem from '../components/catalog_item';
import SponsorBlock from '../containers/sponsor_block';

export default function ({ catalog, ads, loading }) {
  const renderItems = () => {
    const toRender = [];
    let key = 0;

    catalog.forEach((item, index) => {
      toRender.push(<CatalogItem item={item} key={item.id} />);

      if (ads.length) {
        if ((index + 1) !== 0 && (index + 1) % 20 === 0) {
          toRender.push(<SponsorBlock key={ads[key]} adId={ads[key]} />);
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

  return (
    <CatalogListStyle className="search-list">
      <div className="results">
        {renderItems()}
      </div>
      {renderLoader()}
    </CatalogListStyle>
  );
}
