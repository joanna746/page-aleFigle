import ReactDOM from 'react-dom';
import App from './App';
import 'font-awesome/css/font-awesome.min.css';
import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';



ReactDOM.render(
  <React.StrictMode>
  <Provider store={store}>
  <App />
  </Provider>
  </React.StrictMode>,
  document.querySelector('#root')
 );
 
