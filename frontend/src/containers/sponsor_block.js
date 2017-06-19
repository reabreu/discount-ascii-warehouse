import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class SponsorBlock extends Component {
  constructor(props) {
    super(props);
    this.generateAdId();
  }

  generateAdId() {
    let newAdId = this.props.lastAdId;

    do {
      newAdId = Math.floor(Math.random() * 1000);
    } while (newAdId === this.props.lastAdId);

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
