import React from 'react';
import CatalogSearchForm from '../containers/catalog_search_form';
import CatalogList from '../containers/catalog_list';

export default function () {
  return (
    <div className="catalog-browser">
      <CatalogSearchForm />
      <CatalogList />
    </div>
  );
}
