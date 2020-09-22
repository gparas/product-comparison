import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles(
  (theme) => ({
    avatar: {
      width: theme.spacing(8),
      height: theme.spacing(8),
    },
  }),
  { name: 'SubCategory' }
);

export default useStyles;
