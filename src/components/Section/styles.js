import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles(
  (theme) => ({
    root: {
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(3),
      '&:first-child': {
        paddingTop: theme.spacing(6),
      },
    },
  }),
  { name: 'Section' }
);

export default useStyles;
