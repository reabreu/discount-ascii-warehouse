import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import generateAdId from '../../helpers/generate_ad_id';
import { AD_ENDPOINT } from '../../config';
import SponsorBlockStyle from './sponsor_block_style';

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
      <SponsorBlockStyle className="sponsor-block">
        <div>
          <img alt="sponsor" className="ad" src={`${AD_ENDPOINT}/?r=${this.state.adId}`} />
        </div>
      </SponsorBlockStyle>
    );
  }
}

function mapStateToProps({ lastAdId }) {
  return { lastAdId };
}

export default connect(mapStateToProps, actions)(SponsorBlock);
