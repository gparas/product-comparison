import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Typography from '@material-ui/core/Typography';
import C from './constants';

const ProductList = () => {
  return (
    <List disablePadding>
      {C.LIST.map((item, index) => (
        <ListItem divider={Boolean(C.LIST[index + 1])} key={index}>
          <ListItemAvatar>
            <Avatar variant="rounded">P</Avatar>
          </ListItemAvatar>
          <ListItemText primary={item.text} />
          <ListItemSecondaryAction>
            <Typography variant="body2" color="textSecondary">
              <b>{item.count}</b>
            </Typography>
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </List>
  );
};

export default ProductList;
