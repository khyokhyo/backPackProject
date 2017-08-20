import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../css/style.css';

class Cart extends React.Component {

  constructor() {
  	super();
  	this.renderCart = this.renderCart.bind(this);
  }

  renderCart(key) {
  	const item = this.props.items[key];
  	const count = this.props.cart[key];

  	return (
  		<li key={key}>
  			<span>{item._source.title}</span>
  			<span className="price">${count*item._source.price}</span>
  		</li>
  	  )
  }

  render() {
  	const cartIds = Object.keys(this.props.cart);
  	const total = cartIds.reduce((prevTotal, key) => {
  		const item = this.props.items[key];
  		const count = this.props.cart[key];
  		return prevTotal + (count * item._source.price || 0);
  	}, 0);

  	if (this.props.items == 0)
  	return (
      <div>
        <h2>Cart</h2>
        <button disabled={true} onClick={() => this.props.clearCart()}>Clear cart</button>
        <h6><span>Your Cart Is Empty</span></h6>
      </div>
    );

    return (
      <div>
        <h2>Cart</h2>
      	<button onClick={() => this.props.clearCart()}>Clear cart</button>
        <ol className="cart-items">
        	{cartIds.map(this.renderCart)}
        	<li className="total">
        		<strong>Total:</strong>
        		${total}
        	</li>
        </ol>
      </div>
    );
  }
}

export default Cart;
