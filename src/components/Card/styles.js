import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles(
  {
    root: {
      overflow: 'hidden',
    },
    raised: {
      boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.04)',
    },
  },
  { name: 'Card' }
);

export default useStyles;
