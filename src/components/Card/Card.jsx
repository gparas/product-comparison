import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Paper from '@material-ui/core/Paper';
import useStyles from './styles';

const Card = ({ className, raised, gutterBottom, ...other }) => {
  const classes = useStyles();
  return (
    <Paper
      className={clsx(
        classes.root,
        { [classes.raised]: raised, [classes.gutterBottom]: gutterBottom },
        className
      )}
      elevation={0}
      variant="outlined"
      {...other}
    />
  );
};

Card.defaultProps = {
  raised: false,
  gutterBottom: false,
};

Card.propTypes = {
  className: PropTypes.string,
  raised: PropTypes.bool,
  gutterBottom: PropTypes.bool,
};

export default Card;
