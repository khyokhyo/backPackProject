import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../css/style.css';
import Suggestions from './Suggestions';
import Client from "./Client";

const MATCHING_ITEM_LIMIT = 9;

class SearchProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      products: []
    };
  }

  handleSearchChange = e => {
    const value = e.target.value;

    this.setState({
      value: value
    });

    if (value === "") {
      this.setState({
        products: []
      });
    } else {

      Client.search(value, products => {
        this.setState({
          products: products.hits.hits.slice(0, MATCHING_ITEM_LIMIT)
        });
      });
    }
  };

  render() {

    return (
      <div>

        <div className="product-search">
          <input type="text" placeholder="Please enter a product name" value={this.state.value}
            onChange={this.handleSearchChange} />
        </div>
        <Suggestions products={this.state.products}/>

      </div>
    );
  }
}

export default SearchProduct;
