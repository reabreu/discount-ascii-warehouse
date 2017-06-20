import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import * as actions from '../actions';
import getPageScroll from '../helpers/get_page_scroll';
import generateAdId from '../helpers/generate_ad_id';

export default function (ComposedComponent) {
  class CatalogInfinityScroll extends Component {
    constructor(props) {
      super(props);

      this.state = { ads: [] };

      const throttledHandleScroll = _.throttle(this.handleScroll.bind(this), 500);
      window.addEventListener('scroll', throttledHandleScroll);
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

    handleScroll() {
      if (!this.props.catalog.length || this.props.loading || this.props.fullCatalog) return;

      if (getPageScroll() > 80) {
        this.generateAds();
        this.props.setFetchCatalog();
        this.props.getCatalog(this.props.catalogSort, this.props.catalog.length);
      }
    }

    render() {
      return <ComposedComponent {...this.props} {...this.state} />;
    }
  }

  function mapStateToProps({ catalog, fetchCatalog, fullCatalog, catalogSort }) {
    return { catalog, fullCatalog, loading: fetchCatalog, catalogSort };
  }

  return connect(mapStateToProps, actions)(CatalogInfinityScroll);
}
