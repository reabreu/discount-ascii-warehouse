import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import CatalogListStyle from '../../styles/catalog_list';
import Loader from '../components/loader';
import CatalogItem from '../components/catalog_item';
import SponsorBlock from './sponsor_block';
import generateAdId from '../helpers/generate_ad_id';

class CatalogList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ads: [],
    };
  }

  componentDidMount() {
    this.generateAds();
    this.props.setFetchCatalog();
    this.props.getCatalog();
  }

  generateAds() {
    const newAds = [];

    for (let i = 0; i < 3; i += 1) {
      const newAdId = generateAdId(this.props.lastAdId);
      this.props.saveAdId(newAdId);
      newAds.push(newAdId);
    }

    this.setState({
      ads: [...this.state.ads, ...newAds],
    });
  }

  renderItems() {
    const toRender = [];
    let key = 0;

    this.props.catalog.forEach((item, index) => {
      toRender.push(<CatalogItem item={item} key={item.id} />);

      if ((index + 1) !== 0 && (index + 1) % 20 === 0) {
        toRender.push(<SponsorBlock key={this.state.ads[key]} adId={this.state.ads[key]} />);
        key += 1;
      }
    });

    return toRender;
  }

  renderLoader() {
    if (this.props.fetchCatalog) {
      return (
        <div className="loader-wrapper">
          <Loader />
        </div>
      );
    }
  }

  render() {
    return (
      <CatalogListStyle className="search-list">
        <div className="results">
          {this.renderItems()}
        </div>
        {this.renderLoader()}
      </CatalogListStyle>
    );
  }
}

function mapStateToProps({ catalog, lastAdId, fetchCatalog }) {
  return { catalog, lastAdId, fetchCatalog };
}

export default connect(mapStateToProps, actions)(CatalogList);
