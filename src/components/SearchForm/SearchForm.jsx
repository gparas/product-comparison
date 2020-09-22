import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import useStyles from './styles';

const SearchForm = ({ placeholder }) => {
  const classes = useStyles();
  return (
    <Paper component="form" className={classes.root}>
      <IconButton type="submit" aria-label="search">
        <SearchIcon />
      </IconButton>
      <InputBase
        className={classes.input}
        placeholder={placeholder}
        inputProps={{ 'aria-label': placeholder }}
      />
      <Button
        size="large"
        color="primary"
        variant="contained"
        aria-label="search"
      >
        Search
      </Button>
    </Paper>
  );
};

SearchForm.propTypes = {
  placeholder: PropTypes.string,
};

export default SearchForm;
