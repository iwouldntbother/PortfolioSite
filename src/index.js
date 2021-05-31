import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MenuBar from './components/menuBar.jsx';
import Gallery from './components/gallery.jsx';
import Footer from './components/footer.jsx';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <React.StrictMode>
      <MenuBar />
      <Gallery />
      <Footer />
    </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
