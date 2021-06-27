import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import reportWebVitals from './reportWebVitals';
import { HashRouter } from 'react-router-dom';

ReactDOM.render(
    <HashRouter>
      <App />
    </HashRouter>
  ,document.getElementById('root')
);



reportWebVitals(console.log());
