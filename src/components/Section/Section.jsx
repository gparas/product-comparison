import React from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import useStyles from './styles';

const Section = ({ children }) => {
  const classes = useStyles();
  return (
    <section className={classes.root}>
      <Container>{children}</Container>
    </section>
  );
};

Section.propTypes = {
  children: PropTypes.node,
};

export default Section;
