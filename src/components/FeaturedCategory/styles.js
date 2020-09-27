import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles(
  (theme) => ({
    media: {
      borderRadius: theme.shape.borderRadius,
      marginBottom: theme.spacing(2),
    },
  }),
  { name: 'FeaturedCategory' }
);

export default useStyles;
