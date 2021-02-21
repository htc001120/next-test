import React from 'react';
import { useSelector } from 'react-redux';
import SearchResultList from './SearchResultList';

const Result =  () => {
  const items: any = useSelector((state: any) => state.search.items);
  return (
    <>
      { items.length > 0 && <SearchResultList />}
      { (!items || items.length === 0) && <div>No Result</div>}
    </>
  )
}

export default Result;
