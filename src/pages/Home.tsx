import React from 'react';
import Header from '../components/HomeComponents/Header/index';
import TopNav from '../components/HomeComponents/TopNav';
import Menu from '../components/HomeComponents/Menu/Index';
import Category from '../components/HomeComponents/Category';
import Banner from '../components/HomeComponents/Banner';
import Features from '../components/HomeComponents/Features';

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
        <div className="mb-20!">
          <Banner />
        </div>
        <div className="mt-20!">
          <Features />
        </div>
      </div>
    </>
  );
};

export default Home;
