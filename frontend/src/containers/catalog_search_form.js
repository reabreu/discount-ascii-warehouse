import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { heading2 } from '../../styles/headings';
import RadioGroup from '../../styles/radio_group';
import RadioOption from '../../styles/radio_option';

const Heading2 = heading2();

class CatalogSearchForm extends Component {
  render() {
    return (
      <div className="catalog-search-form">
        <Heading2>Search by:</Heading2>
        <form>
          <RadioGroup>
            <RadioOption>
              <input id="size-search-param" type="radio" name="search_type" value="Size" />
              <label htmlFor="size-search-param">Size</label>
            </RadioOption>
            <RadioOption>
              <input id="price-search-param" type="radio" name="search_type" value="Price" />
              <label htmlFor="price-search-param">Price</label>
            </RadioOption>
            <RadioOption>
              <input id="id-search-param" type="radio" name="search_type" value="Id" />
              <label htmlFor="id-search-param">ID</label>
            </RadioOption>
          </RadioGroup>
        </form>
      </div>
    );
  }
}

export default connect(null, actions)(CatalogSearchForm);
