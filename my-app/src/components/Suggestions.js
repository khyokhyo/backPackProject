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
    this.clearCart = this.clearCart.bind(this);
  }

  addToCart(key) {
    const cart = {...this.state.cart};
    const product = {...this.state.product};
    cart[key] = cart[key] + 1 || 1;
    product[key] = key;
    this.setState({ cart });
    this.setState({ product });
  }

  clearCart(event) {
    const cart = {...this.state.cart};
    const product = {...this.state.product};

    this.setState({
      product: [],
      cart: []
    });
  }

  render() {
    const productRows = this.props.products.map((product, idx) => (
      <li className="menu-fish" key={idx}>
        <h6 className="fish-name">{product._source.title}</h6>
        <button onClick={() => this.addToCart(product._source.title)}>Add to cart</button>
      </li>
    ));

    return (
      <div className="catch-of-the-day">
      <div className="menu">
      <header className="top">
        <h2><span>Suggestions</span></h2>
          {productRows}
      </header>
      </div>
      <div className="menu">
        <Cart clearCart={this.clearCart} product={this.state.product} cart={this.state.cart} />
      </div>
      </div>
    );
  }
}

export default Suggestions;
