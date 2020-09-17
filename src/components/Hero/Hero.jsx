import React from 'react';
import Container from '@material-ui/core/Container';
import NavBar from '../NavBar';
import useStyles from './styles';

const Hero = ({ media, children }) => {
  const classes = useStyles();
  return (
    <section
      className={classes.root}
      style={{ backgroundImage: 'url(' + media + ')' }}
    >
      <NavBar position="absolute" color="transparent" />
      <Container>{children}</Container>
    </section>
  );
};

export default Hero;
