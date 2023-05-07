import React from 'react';
import { Outlet } from 'react-router-dom';
import { MenuProvider } from './helpers/MenuProvider';
import './App.scss';
import { Header } from './components/Header/Header';
import { Menu } from './components/Menu/Menu';
import { Footer } from './components/Footer/Footer';
import { TouchProvider } from './helpers/TouchProvider';

const App: React.FC = () => {
  return (
    <MenuProvider>
      <TouchProvider>
        <div className="App">
          <Header />

          <Menu />
          <Outlet />

          <Footer />
        </div>
      </TouchProvider>
    </MenuProvider>
  );
};

export default App;
