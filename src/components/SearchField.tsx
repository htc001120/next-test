import React from 'react';
import { useDispatch } from 'react-redux';

import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export interface ISearchFieldProps {
  search: Function
}

const SearchField =  ({ search }: ISearchFieldProps) => {
  const dispatch = useDispatch();
  const [keyword, setKeyword] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(event.target.value);
  };

  const handleClick = () => {
    dispatch({ type: 'SEARCH_ITEMS_REQUESTED', payload: { keyword } });
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', p: 1 }}>
      <TextField
        id="filled-basic"
        label="Keyword"
        variant="standard"
        value={keyword}
        onChange={handleChange}
      />
      <Button variant="contained" onClick={handleClick} disabled={keyword.length === 0}>Search</Button>
    </Box>
  )
};

export default SearchField;
