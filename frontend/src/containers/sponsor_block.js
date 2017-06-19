import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import generateAdId from '../helpers/generate_ad_id';

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
      <div className="sponsor-block">
        <img alt="sponsor" className="ad" src={`/ad/?r=${this.state.adId}`} />
      </div>
    );
  }
}

function mapStateToProps({ lastAdId }) {
  return { lastAdId };
}

export default connect(mapStateToProps, actions)(SponsorBlock);
