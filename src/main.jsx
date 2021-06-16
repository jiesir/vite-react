import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from '@/utils/store';
import Router from './Router.jsx';
import '@/utils/loader';
import { setupConsole } from '@/utils/console';
import "@/styles/index.less";

setupConsole();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router />
    </Provider>
  </React.StrictMode>,
  document.getElementById('app')
)
