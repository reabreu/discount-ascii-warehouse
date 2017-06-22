import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { heading2 } from '../../../styles/headings';
import RadioGroupStyle from '../../../styles/radio_group';
import RadioOptionStyle from '../../../styles/radio_option';

const Heading2 = heading2();

class CatalogSearchForm extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.props.setSortTerm(e.target.value);
    this.props.setFetchCatalog();
    this.props.clearCatalog();
    this.props.getCatalog(e.target.value);
  }

  renderRadios() {
    return ['size', 'price', 'id'].map((item) => {
      return (
        <RadioOptionStyle key={item}>
          <input onClick={this.handleClick} id={`${item}-search-param`} type="radio" name="search_type" value={`${item}`} />
          <label htmlFor={`${item}-search-param`}>{item}</label>
        </RadioOptionStyle>
      );
    });
  }

  render() {
    return (
      <div className="catalog-search-form">
        <Heading2>Search by:</Heading2>
        <form>
          <RadioGroupStyle>
            {this.renderRadios()}
          </RadioGroupStyle>
        </form>
      </div>
    );
  }
}

export default connect(null, actions)(CatalogSearchForm);
