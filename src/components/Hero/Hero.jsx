import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Container from '@material-ui/core/Container';
import NavBar from '../NavBar';
import useStyles from './styles';

const Hero = ({ media, gutterBottom, children }) => {
  const classes = useStyles();
  return (
    <section
      className={clsx(classes.root, { [classes.gutterBottom]: gutterBottom })}
      style={{ backgroundImage: 'url(' + media + ')' }}
    >
      <NavBar position="absolute" color="transparent" />
      <Container>{children}</Container>
    </section>
  );
};

Hero.propTypes = {
  media: PropTypes.string,
  children: PropTypes.node,
  gutterBottom: PropTypes.bool,
};

export default Hero;
