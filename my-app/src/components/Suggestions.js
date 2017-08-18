import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../css/style.css';
import Cart from './Cart';

class Suggestions extends React.Component {

  constructor() {
    super();
    this.state = {
      product: {},
      cart: {}
    };

    this.addToCart = this.addToCart.bind(this);
  }

  addToCart(key) {
    const cart = {...this.state.cart};
    const product = {...this.state.product};
    cart[key] = cart[key] + 1 || 1;
    product[key] = key;
    this.setState({ cart });
    this.setState({ product });

    alert('added to cart ' + cart[key] + ' ' + product[key]);
  }

  render() {
    return (
      <div className="catch-of-the-day">
      <div classname="menu">
      <header className="top">
        <h2><span>Suggestions</span></h2>
        <li className="menu-fish">
          <h6 className="fish-name">Phone</h6>
          <p>This is a smart phone. The company is Samsung. It is a product of J series. The code is Samsung Galaxy J7.</p>
          <button onClick={() => this.addToCart('phone')}>Add to cart</button>
        </li>
        <li className="menu-fish">
          <h6 className="fish-name">Samsung</h6>
          <p>This is a smart phone. It is a product of J series. The code is Samsung Galaxy J5.</p>
          <button onClick={() => this.addToCart('samsung')}>Add to cart</button>
        </li>
      </header>
      </div>
      <div classname="menu">
        <Cart product={this.state.product} cart={this.state.cart} />
      </div>
      </div>
    );
  }
}

export default Suggestions;
