import React from 'react';
import { Outlet } from 'react-router-dom';
import { MenuProvider } from './helpers/MenuProvider';
import './App.scss';
import { Header } from './components/Header/Header';
import { Menu } from './components/Menu/Menu';
import { Footer } from './components/Footer/Footer';

const App: React.FC = () => {
  return (
    <MenuProvider>
      <div className="App">
        <Header />

        <Menu />
        <Outlet />

        <Footer />
      </div>
    </MenuProvider>
  );
};

export default App;
