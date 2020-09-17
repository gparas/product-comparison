import React from 'react';
import { Hero } from '../../components';
import HeroContent from './Hero';

const Home = () => {
  return (
    <Hero media="/static/images/hero.png">
      <HeroContent />
    </Hero>
  );
};

export default Home;
