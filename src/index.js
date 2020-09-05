import React from 'react';
import ReactDOM from 'react-dom';
import "./assets/css/global.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import DriverManagement from './pages/DriverManagement';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <DriverManagement />,
  document.getElementById('root')
);

serviceWorker.unregister();
