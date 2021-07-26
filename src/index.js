import React from 'react';
import ReactDOM from 'react-dom';
import { SpeechProvider } from '@speechly/react-client';

import { Provider } from './context/context';
import App from './App';
import './index.css';

ReactDOM.render(
  <SpeechProvider appId='afc647e5-545d-488f-a4db-1471768e9350' language='en-US'>
    <Provider>
      <App />
    </Provider>
  </SpeechProvider>, 
  document.getElementById('root')
);