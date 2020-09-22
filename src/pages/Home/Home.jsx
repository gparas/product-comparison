import React from 'react';
import { Hero } from '../../components';
import HeroContent from './Hero.jsx';
import Categories from './Categories';
import SubCategories from './SubCategories';

const Home = () => {
  return (
    <>
      <Hero media="/static/images/hero.png" gutterBottom>
        <HeroContent />
      </Hero>
      <Categories header="Popular categories" />
      <SubCategories header="Popular sub-categories" />
      <Categories header="New categories" />
    </>
  );
};

export default Home;
