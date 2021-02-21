import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import { useSelector } from 'react-redux';

import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const SearchResultList = () => {
  const ref = useRef(null);
  const [page, setPage] = useState(1);
  const keyword = useSelector((state) => state.search.keyword);
  const total = useSelector((state) => state.search.total);

  const handleScroll = () => {
    if (ref.current.scrollHeight - ref.current.scrollTop === ref.current.clientHeight) {
      console.log(ref.current.scrollHeight, ref.current.scrollTop, ref.current.clientHeight);
      if (page * 10 < total) {
        console.log(page);
        setPage(page + 1);
      }
    }
  };
  useLayoutEffect(() => {
    const box = ref.current;
    box.addEventListener('scroll', handleScroll);
    return () => {
      box.removeEventListener('scroll', handleScroll);
    };
  }, [page]);

  useEffect(() => {
    setPage(1);
    return () => {}
  }, [keyword]);

  const items = useSelector((state) => state.search.items);
  return (
    <Box sx={{ overflowY: 'auto' }} ref={ref}>
      <Typography variant="subtitle2">{`Showing page ${page} / ${total / 10}`}</Typography>
      <List component="nav">
        {
          items.slice(0, page * 10).map((item) => (
            <ListItem alignItems="flex-start" key={item.trackId || item.collectionId}>
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
    </Box>
  )
};

export default SearchResultList;
