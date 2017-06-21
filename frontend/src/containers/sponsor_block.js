import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import generateAdId from '../helpers/generate_ad_id';
import { AD_ENDPOINT } from '../config';
import SponsorBlockStyles from '../../styles/sponsor_block';

class SponsorBlock extends Component {
  constructor(props) {
    super(props);

    if (props.adId) {
      this.state = { adId: props.adId };
    } else {
      this.generateAdId();
    }
  }

  generateAdId() {
    const newAdId = generateAdId(this.props.lastAdId);

    this.state = { adId: newAdId };
    this.props.saveAdId(newAdId);
  }

  render() {
    return (
      <SponsorBlockStyles className="sponsor-block">
        <img alt="sponsor" className="ad" src={`${AD_ENDPOINT}/?r=${this.state.adId}`} />
      </SponsorBlockStyles>
    );
  }
}

function mapStateToProps({ lastAdId }) {
  return { lastAdId };
}

export default connect(mapStateToProps, actions)(SponsorBlock);
