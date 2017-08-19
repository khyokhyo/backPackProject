import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../css/style.css';
import Cart from './Cart';

class Suggestions extends React.Component {

  constructor() {
    super();
    this.state = {
      product: [],
      cart: []
    };

    this.addToCart = this.addToCart.bind(this);
    this.clearCart = this.clearCart.bind(this);
  }

  addToCart(item, key) {
    const cart = {...this.state.cart};
    const product = {...this.state.product};
    cart[key] = cart[key] + 1 || 1;
    product[key] = item;
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
      <li key={idx}>
        <img src={product._source.images[0]} alt={product._source.title} />
        <h6 >{product._source.title}</h6>
        <p >${product._source.price}</p>
        <button key={idx} onClick={() => this.addToCart(product, product._source.title)}>Add to cart</button>
      </li>
    ));

    if (this.props.products == 0) 
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <header className="top">
            <h2><span>Suggestions</span></h2>
            <h3><span>Nothing To Show</span></h3>
          </header>
        </div>
        <div className="menu">
          <Cart clearCart={this.clearCart} product={this.state.product} cart={this.state.cart} />
        </div>
      </div>
    );

    return (
      <div className="catch-of-the-day">
      <div className="menu">
      <header className="top">
        <h2><span>Suggestions</span></h2>
        <ul>
          {productRows}
        </ul>
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
