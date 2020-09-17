import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(
  (theme) => ({
    root: {
      padding: theme.spacing(1 / 2),
      display: 'flex',
      alignItems: 'stretch',
      maxWidth: 600,
    },
    input: {
      flexGrow: 1,
    },
  }),
  { name: 'SearchForm' }
);

export default useStyles;
