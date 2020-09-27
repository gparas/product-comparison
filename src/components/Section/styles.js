import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles(
  (theme) => ({
    root: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
    dense: {
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(3),
    },
    gutterBottom: {
      marginBottom: theme.spacing(3),
    },
    bgcolorLight: {
      backgroundColor: theme.palette.grey[100],
    },
  }),
  { name: 'Section' }
);

export default useStyles;
