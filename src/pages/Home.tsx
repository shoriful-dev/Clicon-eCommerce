import React from 'react';
import Header from '../components/HomeComponents/Header/index';
import TopNav from '../components/HomeComponents/TopNav';
import Menu from '../components/HomeComponents/Menu/Index';

const Home: React.FC = () => {
  return (
    <>
      <div>
        <Header />
        <TopNav />
        <Menu />
      </div>
    </>
  );
};

export default Home;
