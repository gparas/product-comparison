import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import useStyles from './styles';

const CardContent = ({ children, className, component: Component = 'div' }) => {
  const classes = useStyles();
  return (
    <Component className={clsx(classes.root, className)}>{children}</Component>
  );
};

CardContent.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  component: PropTypes.elementType,
};

export default CardContent;
