import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles(
  (theme) => ({
    root: {
      marginBottom: theme.spacing(3),
    },
    brand: {
      marginRight: theme.spacing(2),
    },
    loginCta: {
      marginLeft: 'auto',
    },
  }),
  { name: 'NavBar' }
);

export default useStyles;
