import React from 'react';
import ReactDOM from 'react-dom';
import './css/style.css';
import SearchProduct from './components/SearchProduct';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<SearchProduct />, document.getElementById('main'));
registerServiceWorker();
