import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { Section, SectionHeader, Category } from '../../components';

const Categories = ({ header, gutterBottom }) => {
  return (
    <Section dense gutterBottom={gutterBottom}>
      <SectionHeader
        header={header}
        subheader="A quick description about the popular categories"
      />
      <Grid container spacing={3}>
        {Array.from(new Array(3)).map((_, index) => (
          <Grid item sm={4} key={index}>
            <Category />
          </Grid>
        ))}
      </Grid>
    </Section>
  );
};

Categories.propTypes = {
  header: PropTypes.string,
  gutterBottom: PropTypes.bool,
};

export default Categories;
