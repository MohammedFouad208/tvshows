import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MainApp from "./MainApp"
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<MainApp />, document.getElementById('root'));
serviceWorker.unregister();
