import React from 'react';
import { useSelector } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import SearchResultList from './SearchResultList';

const Result = () => {
  const items: any = useSelector((state: any) => state.search.items);
  return (
    <>
      { items.length > 0 && <SearchResultList />}
      { (!items || items.length === 0) && <Typography variant="h5">No Result</Typography>}
    </>
  )
}

export default Result;
