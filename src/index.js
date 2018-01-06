import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Day from './Day';
import registerServiceWorker from './registerServiceWorker';
import data from './data';


ReactDOM.render(<App data={data} />, document.getElementById('root'));
registerServiceWorker();
