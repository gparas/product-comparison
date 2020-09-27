import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Container from '@material-ui/core/Container';
import U from '../../utils';
import useStyles from './styles';

const Section = ({ children, bgcolor, dense, gutterBottom }) => {
  const classes = useStyles();
  return (
    <section
      className={clsx(classes.root, {
        [classes.dense]: dense,
        [classes.gutterBottom]: gutterBottom,
        [classes[`bgcolor${U.capitalize(bgcolor)}`]]: bgcolor !== 'default',
      })}
    >
      <Container>{children}</Container>
    </section>
  );
};

Section.defaultProps = {
  dense: false,
  gutterBottom: false,
  bgcolor: 'default',
};

Section.propTypes = {
  children: PropTypes.node,
  dense: PropTypes.bool,
  gutterBottom: PropTypes.bool,
  bgcolor: PropTypes.oneOf(['default', 'light']),
};

export default Section;
