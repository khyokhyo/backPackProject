import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../css/style.css';

class Cart extends React.Component {

  render() {
  	const cartIds = Object.keys(this.props.cart);
  	const total = cartIds.reduce((prevTotal, key) => {
  		const count = this.props.cart[1];
  		return count;
  	}, 0);

    return (
      <div className="order-wrap">
        <h2>Cart</h2>
        <p>{total}</p>
      </div>
    );
  }
}

export default Cart;
