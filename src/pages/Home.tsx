import React from 'react';
import Header from '../components/HomeComponents/Header/index';
import TopNav from '../components/HomeComponents/TopNav';
import Menu from '../components/HomeComponents/Menu/Index';
import Category from '../components/HomeComponents/Category';
import Banner from '../components/HomeComponents/Banner';

const Home: React.FC = () => {
  return (
    <>
      <div>
        <Header />
        <TopNav />
        <Menu />
        <div className="shadow">
          <Category />
        </div>
        <Banner />
      </div>
    </>
  );
};

export default Home;
