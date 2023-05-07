import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  HashRouter as Router,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';

import './index.css';
import App from './App';
import { HomePage } from './pages/HomePage/HomePage';
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage';
import { LivingRoomPage } from './pages/LivingRoomPage/LivingRoomPage';
import { DiningRoomPage } from './pages/DiningRoomPage/DiningRoomPage';
import { BedRoomPage } from './pages/BedroomPage/BedroomPages';

import { KitchenPage } from './pages/BathRoomPage/BathRoom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />
        <Route path="home" element={<Navigate to="/" replace />} />

        <Route path="/living-room" element={<LivingRoomPage />} />
        <Route path="/dining-room" element={<DiningRoomPage />} />
        <Route path="/bedroom" element={<BedRoomPage />} />

        <Route path="/bathroom" element={<KitchenPage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  </Router>
  </React.StrictMode>,
);
