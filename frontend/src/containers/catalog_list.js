import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import CatalogListStyle from '../../styles/catalog_list';
import Loader from '../components/loader';

class CatalogList extends Component {
  render() {
    return (
      <CatalogListStyle className="search-list">
        <div className="loader-wrapper">
          <Loader />
        </div>
      </CatalogListStyle>
    );
  }
}

function mapStateToProps({ catalog }) {
  return { catalog };
}

export default connect(mapStateToProps, actions)(CatalogList);
