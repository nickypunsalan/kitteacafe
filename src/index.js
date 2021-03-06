import React from 'react';
import ReactDOM from 'react-dom';
import KitteaCafe from './pages/KitteaCafe';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/kitteacafe.css';

ReactDOM.render(
  <React.StrictMode>
    <KitteaCafe />

    <script src="https://unpkg.com/react/umd/react.production.min.js" crossorigin></script>
    <script
      src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
      crossorigin></script>
    <script
      src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
      crossorigin></script>


  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
