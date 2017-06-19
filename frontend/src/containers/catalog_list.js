import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import CatalogListStyle from '../../styles/catalog_list';
import Loader from '../components/loader';
import CatalogItem from '../components/catalog_item';

class CatalogList extends Component {
  componentDidMount() {
    this.props.getCatalog();
  }

  renderItems() {
    return this.props.catalog.map(item => <CatalogItem item={item} key={item.id} />);
  }

  render() {
    return (
      <CatalogListStyle className="search-list">
        <div>{this.renderItems()}</div>
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
