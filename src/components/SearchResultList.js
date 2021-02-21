import React from 'react';
import { useSelector } from 'react-redux';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';


const SearchResultList = () => {
  const items = useSelector((state) => state.search.items);
  return (
    <List component="nav">
      {
        items.map((item) => (
          <ListItem alignItems="flex-start" key={item.colloectionId}>
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src={item.artworkUrl30} />
            </ListItemAvatar>
            <ListItemText
              primary={item.trackName}
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    color="textPrimary"
                  >
                    {item.artistName} 
                  </Typography>
                  {item.collectionName}
                </React.Fragment>
              }
            />
          </ListItem>
        ))
      }
    </List>
  )
};

export default SearchResultList;
