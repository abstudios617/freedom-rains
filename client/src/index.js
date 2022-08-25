import React from 'react';
import { hydrate } from 'react-dom';
import './index.css';
import './requests/analytics-request';
import PageView from './page-view';

const rootElement = document.getElementById('root');

hydrate(<PageView />, rootElement);
