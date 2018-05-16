import * as React from 'react';
import * as ReactDOM from 'react-dom';
import AutoSignature from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AutoSignature />, div);
  ReactDOM.unmountComponentAtNode(div);
});
