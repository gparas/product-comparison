import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Typography from '@material-ui/core/Typography';
import { Archive, ShoppingBag, Copy } from 'react-feather';
import Header from './Header';
import SubHeader from './SubHeader';
import useStyles from './styles';

const CategoryCard = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <Grid container spacing={2}>
        <Grid item>
          <Avatar variant="rounded" className={classes.avatar}>
            N
          </Avatar>
        </Grid>
        <Grid item>
          <Header />
          <SubHeader icon={<Archive size={16} />}>24 products</SubHeader>
          <SubHeader icon={<ShoppingBag size={16} />}>9 brands</SubHeader>
          <SubHeader icon={<Copy size={16} />}>12 sub-categories</SubHeader>
        </Grid>
      </Grid>
      <List className={classes.list}>
        {Array.from(new Array(5)).map((_, index) => (
          <ListItem disableGutters divider key={index}>
            <ListItemAvatar>
              <Avatar variant="rounded">P</Avatar>
            </ListItemAvatar>
            <ListItemText primary="Product name" />
            <ListItemSecondaryAction>
              <Typography variant="body2" color="textSecondary">
                <b>12</b>
              </Typography>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default CategoryCard;
