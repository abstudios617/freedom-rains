import React from 'react';
import { hydrate, render } from 'react-dom';
import './index.css';
import './requests/analytics-request';
import PageView from './page-view';

const rootElement = document.getElementById('root');
if (rootElement && rootElement.innerHTML !== '') {
  hydrate(<PageView />, rootElement);
} else {
  render(<PageView />, rootElement);
}
