import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app/App';
import reportWebVitals from './reportWebVitals';
import * as bootstrap from 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { NotifyProvider } from "@src/app/providers/NotifyProvider";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <NotifyProvider>
        <App />
      </NotifyProvider>
    </BrowserRouter>
  </React.StrictMode>
);


reportWebVitals();
