import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Paper from '@material-ui/core/Paper';
import useStyles from './styles';

const Card = ({ className, raised, ...other }) => {
  const classes = useStyles();
  return (
    <Paper
      className={clsx(classes.root, { [classes.raised]: raised }, className)}
      elevation={0}
      variant="outlined"
      {...other}
    />
  );
};

Card.defaultProps = {
  raised: false,
};

Card.propTypes = {
  className: PropTypes.string,
  raised: PropTypes.bool,
};

export default Card;
