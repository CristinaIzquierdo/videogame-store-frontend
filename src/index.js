import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from '../src/components/App';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Detail from './components/details/Detail';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="detail/:game" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
