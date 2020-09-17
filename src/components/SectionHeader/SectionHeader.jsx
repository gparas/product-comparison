import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

const SectionHeader = ({ header, subheader }) => {
  return (
    <header>
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
