import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles(
  (theme) => ({
    root: {
      position: 'relative',
      color: theme.palette.common.white,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      paddingTop: theme.spacing(30),
      paddingBottom: theme.spacing(3),
      marginBottom: theme.spacing(6),
      [theme.breakpoints.down('sm')]: {
        paddingTop: theme.spacing(20),
      },
    },
  }),
  { name: 'Hero' }
);

export default useStyles;
