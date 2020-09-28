import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles(
  (theme) => ({
    root: {
      overflow: 'hidden',
    },
    raised: {
      boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.04)',
    },
    gutterBottom: {
      marginBottom: theme.spacing(3),
    },
  }),
  { name: 'Card' }
);

export default useStyles;
