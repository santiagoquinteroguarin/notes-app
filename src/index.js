// react
import React from 'react';
import ReactDOM from 'react-dom';

// css
import './index.css';

// codigo de la app
import App from './App';
// codigo en memoria
import * as serviceWorker from './serviceWorker';

// renderizar la app
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
