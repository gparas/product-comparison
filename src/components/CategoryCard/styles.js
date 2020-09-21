import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles(
  (theme) => ({
    root: {
      padding: theme.spacing(2),
    },
    list: {
      marginTop: theme.spacing(2),
    },
    avatar: {
      width: theme.spacing(12),
      height: theme.spacing(12),
    },
  }),
  { name: 'CategoryCard' }
);

export default useStyles;
