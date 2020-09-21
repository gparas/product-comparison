import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles(
  (theme) => ({
    root: {
      marginBottom: theme.spacing(3),
    },
  }),
  { name: 'SectionHeader' }
);

export default useStyles;
