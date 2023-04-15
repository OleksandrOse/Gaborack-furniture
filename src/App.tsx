import React from 'react';
import { Header } from './components/Header/Header';

import './App.scss';
import { Main } from './components/Main/Main';
import { Menu } from './components/Menu/Menu';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />

      <Menu />

      <Main />
    </div>
  );
};

export default App;
