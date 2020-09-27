import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { Section, SectionHeader, FeaturedCategory } from '../../components';

const FeaturedCategories = ({ header }) => {
  return (
    <Section bgcolor="light">
      <SectionHeader
        header={header}
        subheader="A quick description about the popular featured categories"
      />
      <Grid container spacing={3}>
        {Array.from(new Array(6)).map((_, index) => (
          <Grid item sm={4} key={index}>
            <FeaturedCategory />
          </Grid>
        ))}
      </Grid>
    </Section>
  );
};

FeaturedCategories.propTypes = {
  header: PropTypes.string,
};

export default FeaturedCategories;
