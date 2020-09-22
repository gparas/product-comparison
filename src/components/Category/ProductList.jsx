import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Typography from '@material-ui/core/Typography';

const ProductList = () => {
  return (
    <List>
      {Array.from(new Array(5)).map((_, index) => (
        <ListItem divider key={index}>
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
  );
};

export default ProductList;
