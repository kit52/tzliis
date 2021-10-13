import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from "react-redux";

import { HashRouter } from 'react-router-dom';
import { PersistGate } from "redux-persist/es/integration/react";
import { store, persistor } from "./redux/store";

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <HashRouter>
        <App />
      </HashRouter>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);


