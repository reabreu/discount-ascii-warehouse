import React from 'react';
import CatalogSearchForm from '../containers/catalog_search_form';
import CatalogList from './catalog_list';
import catalogInfinityScroll from '../containers/catalog_infinity_scroll';

const InfinityList = catalogInfinityScroll(CatalogList);

export default function () {
  return (
    <div className="catalog-browser">
      <CatalogSearchForm />
      <InfinityList />
    </div>
  );
}
