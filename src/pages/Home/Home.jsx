import React from 'react';
import { Hero, Footer } from '../../components';
import HeroContent from './Hero.jsx';
import Categories from './Categories';
import SubCategories from './SubCategories';
import FeaturedCategories from './FeaturedCategories';

const Home = () => {
  return (
    <>
      <Hero media="/static/images/hero.png" gutterBottom>
        <HeroContent />
      </Hero>
      <Categories header="Popular categories" />
      <SubCategories header="Popular sub-categories" />
      <Categories header="New categories" gutterBottom />
      <FeaturedCategories header="Featured categories" />
      <Footer />
    </>
  );
};

export default Home;
