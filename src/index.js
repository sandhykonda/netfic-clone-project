import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import appStore from './utils/appStore';

const root = ReactDOM.createRoot(document.getElementById('root'));
const persistor = persistStore(appStore);
root.render(
  <React.StrictMode>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </React.StrictMode>
);

reportWebVitals();

