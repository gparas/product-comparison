import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles(
  (theme) => ({
    root: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
    divider: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
    },
  }),
  { name: 'Footer' }
);

export default useStyles;
