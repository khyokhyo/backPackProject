import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../css/style.css';

class Cart extends React.Component {

  constructor() {
  	super();
  	this.renderCart = this.renderCart.bind(this);
  }

  renderCart(key) {
  	const product = this.props.product[key];
  	const count = this.props.cart[key];

  	return (
  		<li key={key}>
  			<span>{product}</span>
  			<span className="price">{count}</span>
  		</li>
  	  )
  }

  render() {
  	const cartIds = Object.keys(this.props.cart);
  	const total = cartIds.reduce((prevTotal, key) => {
  		const product = this.props.product[key];
  		const count = this.props.cart[key];
  		return prevTotal+count || 0;
  	}, 0);

    return (
      <div className="order-wrap">
        <h2>Cart</h2>
        <ul className="order">
        	{cartIds.map(this.renderCart)}
        	<li className="total">
        		<strong>Total:</strong>
        		{total}
        	</li>
        </ul>
      </div>
    );
  }
}

export default Cart;
