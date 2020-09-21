import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import useStyles from './styles';

const SectionHeader = ({ header, subheader }) => {
  const classes = useStyles();
  return (
    <header className={classes.root}>
      <Typography variant="h3">{header}</Typography>
      <Typography>{subheader}</Typography>
    </header>
  );
};

SectionHeader.propTypes = {
  header: PropTypes.string,
  subheader: PropTypes.string,
};

export default SectionHeader;
