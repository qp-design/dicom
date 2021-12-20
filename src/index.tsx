import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import Demo from './DemoJsx';
import 'antd/dist/antd.less';
import registerServiceWorker from './registerServiceWorker';

// import Demo from "./Demo";
ReactDOM.render(
  <App />,
  document.getElementById('root')
);
registerServiceWorker()
