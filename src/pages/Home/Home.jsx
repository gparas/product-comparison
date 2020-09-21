import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { Hero, SectionHeader, CategoryCard } from '../../components';
import HeroContent from './Hero.jsx';

const Home = () => {
  return (
    <>
      <Hero media="/static/images/hero.png">
        <HeroContent />
      </Hero>
      <Container>
        <SectionHeader
          header="Popular categories"
          subheader="A quick description about the popular categories "
        />
        <Grid container spacing={2}>
          {Array.from(new Array(3)).map((_, index) => (
            <Grid item sm={4} key={index}>
              <CategoryCard />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Home;
