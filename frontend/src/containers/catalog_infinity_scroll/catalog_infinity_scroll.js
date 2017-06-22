import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import * as actions from '../../actions';
import getPageScroll from '../../helpers/get_page_scroll';
import generateAdId from '../../helpers/generate_ad_id';
import { CATALOG_PER_PAGE, CATALOG_FETCH_MORE_PERCENTAGE, CATALOG_RENDER_FULL_PERCENTAGE } from '../../config';

export default function (ComposedComponent) {
  class CatalogInfinityScroll extends Component {
    constructor(props) {
      super(props);

      this.state = { ads: [] };

      const throttledHandleScroll = _.throttle(this.handleScroll.bind(this), 500);
      window.addEventListener('scroll', throttledHandleScroll);
    }

    componentDidMount() {
      this.setupAndFetchCatalog();
    }

    componentDidUpdate() {
      if (getPageScroll() > CATALOG_RENDER_FULL_PERCENTAGE && !this.props.renderFullCatalog) {
        this.props.setRenderFull(true);
      }
    }

    setupAndFetchCatalog() {
      this.generateAds();
      this.props.setFetchCatalog();
      this.props.getCatalog(this.props.catalogSort, this.props.catalog.length);
    }

    generateAds() {
      const newAds = [];
      const numAdsToGenerate = Math.floor(
        (this.props.catalog.length + CATALOG_PER_PAGE) / 20) - this.state.ads.length;

      for (let i = 0; i < numAdsToGenerate; i += 1) {
        const newAdId = generateAdId(this.props.lastAdId);
        this.props.saveAdId(newAdId);
        newAds.push(newAdId);
      }

      this.setState({
        ads: [...this.state.ads, ...newAds],
      });
    }

    handleScroll() {
      if (getPageScroll() > CATALOG_RENDER_FULL_PERCENTAGE) {
        setTimeout(() => { this.props.setRenderFull(true); }, 400);
      }

      if (!this.props.catalog.length || this.props.loading || this.props.fullCatalog || !this.props.renderFullCatalog) return;

      if (getPageScroll() > CATALOG_FETCH_MORE_PERCENTAGE) {
        this.setupAndFetchCatalog();
      }
    }

    render() {
      return <ComposedComponent {...this.props} {...this.state} />;
    }
  }

  function mapStateToProps({ catalog, fetchCatalog, fullCatalog, catalogSort, renderFullCatalog }) {
    return { catalog, fullCatalog, loading: fetchCatalog, catalogSort, renderFullCatalog };
  }

  return connect(mapStateToProps, actions)(CatalogInfinityScroll);
}
