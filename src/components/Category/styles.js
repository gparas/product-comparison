import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles(
  (theme) => ({
    avatar: {
      width: theme.spacing(12),
      height: theme.spacing(12),
    },
  }),
  { name: 'Category' }
);

export default useStyles;
