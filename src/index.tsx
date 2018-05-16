import * as React from 'react';
import * as ReactDOM from 'react-dom';
import AutoSignature from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <AutoSignature />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
