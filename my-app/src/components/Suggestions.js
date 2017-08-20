import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../css/style.css';
import Cart from './Cart';

class Suggestions extends React.Component {

  constructor() {
    super();
    this.state = {
      items: [],
      cart: []
    };

    this.addToCart = this.addToCart.bind(this);
    this.clearCart = this.clearCart.bind(this);
  }

  addToCart(item, key) {
    const cart = {...this.state.cart};
    const items = {...this.state.items};
    cart[key] = cart[key] + 1 || 1;
    items[key] = item;
    this.setState({ cart });
    this.setState({ items });
  }

  clearCart(event) {
    const cart = {...this.state.cart};
    const items = {...this.state.items};

    this.setState({
      items: [],
      cart: []
    });
  }

  render() {
    const productRows = this.props.products.map((product, idx) => (
      <li style={{width: 300, height: 450}} key={idx}>
        <img src={product._source.images[0]} style={{width: 250, height: 250}} alt={product._source.title} />
        <h6 >{product._source.title}</h6>
        <p >${product._source.price}</p>
        <button key={idx} onClick={() => this.addToCart(product, product._source.title)}>Add to cart</button>
      </li>
    ));

    if (this.props.products == 0) 
    return (
      <div className="product-box-holders">
        <div>
          <h2><span>Suggestions</span></h2>
          <h4><span>Nothing To show</span></h4>
        </div>
        <div>
          <Cart clearCart={this.clearCart} items={this.state.items} cart={this.state.cart} />
        </div>
      </div>
    );

    return (
      <div className="product-box-holders">
        <div>
          <h2><span>Suggestions</span></h2>
          <ul>
            {productRows}
          </ul>
        </div>
        <div>
          <Cart clearCart={this.clearCart} items={this.state.items} cart={this.state.cart} />
        </div>
      </div>
    );
  }
}

export default Suggestions;
