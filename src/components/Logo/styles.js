import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles(
  (theme) => ({
    root: {
      marginRight: theme.spacing(2),
    },
  }),
  { name: 'Logo' }
);

export default useStyles;
