import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class CatalogSearchForm extends Component {
  render() {
    return (
      <div className="catalog-search-form">
        Search options here!
      </div>
    );
  }
}

export default connect(null, actions)(CatalogSearchForm);
