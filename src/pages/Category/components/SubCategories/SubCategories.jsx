import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { ChevronRight } from 'react-feather';
import { Card, IconText } from '../../../../components';

const SubCategories = () => {
  return (
    <>
      <Typography variant="h3" gutterBottom>
        Sub-Categories
      </Typography>
      <Card raised gutterBottom>
        <List disablePadding>
          {Array.from(new Array(4)).map((_, index) => (
            <ListItem divider key={`sub_categories-${index}`}>
              <ListItemText
                primary="Category name"
                secondary={
                  <>
                    <IconText icon="products">12 products</IconText>
                    <IconText icon="brands">9 brands</IconText>
                  </>
                }
                primaryTypographyProps={{
                  variant: 'h5',
                  gutterBottom: true,
                }}
                secondaryTypographyProps={{
                  component: 'div',
                }}
              />
            </ListItem>
          ))}
          <ListItem>
            <ListItemText
              primary="View all"
              primaryTypographyProps={{
                color: 'primary',
                variant: 'button',
              }}
            />
            <ListItemSecondaryAction>
              <IconButton edge="end" size="small">
                <ChevronRight />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        </List>
      </Card>
    </>
  );
};

export default SubCategories;
