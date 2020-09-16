import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles(
  (theme) => ({
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
