import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../css/style.css';
import Suggestions from './Suggestions';

class SearchProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <form className="product-selector" onSubmit={this.handleSubmit}>
          <h5>Enter a product name</h5>
          <input type="text" required value={this.state.value} onChange={this.handleChange} />
          <button type="submit">Search</button>
        </form>
        <Suggestions />
      </div>
    );
  }
}

export default SearchProduct;
