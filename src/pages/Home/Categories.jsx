import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Section, SectionHeader, Category } from '../../components';

const Categories = ({ header }) => {
  return (
    <Section>
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

export default Categories;