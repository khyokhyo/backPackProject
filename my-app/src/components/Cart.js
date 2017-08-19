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
  			<span>{product._source.title}</span>
  			<span className="price">${count*product._source.price}</span>
  		</li>
  	  )
  }

  render() {
  	const cartIds = Object.keys(this.props.cart);
  	const total = cartIds.reduce((prevTotal, key) => {
  		const product = this.props.product[key];
  		const count = this.props.cart[key];
  		return prevTotal + (count * product._source.price || 0);
  	}, 0);

  	if (this.props.product == 0)
  	return (
      <div className="order-wrap">
        <h2>Cart</h2>
        <button disabled={true} onClick={() => this.props.clearCart()}>Clear cart</button>
        <h6><span>Your Cart Is Empty</span></h6>
      </div>
    );

    return (
      <div className="order-wrap">
        <h2>Cart</h2>
      	<button onClick={() => this.props.clearCart()}>Clear cart</button>
        <ol className="order">
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
