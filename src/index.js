import React from 'react';
import ReactDOM from 'react-dom';

// import registerServiceWorker from './registerServiceWorker';

import 'normalize.css/normalize.css';
import './styles/index.css';

import AppRouter from './router';

ReactDOM.render(<AppRouter />, document.getElementById('root'));
// registerServiceWorker();
