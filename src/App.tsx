import React from 'react';
import Box from '@material-ui/core/Box';
import SearchField from './components/SearchField';
import Result from './components/Result';

function App() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <SearchField search={() => {}} />
      <Result />
    </Box>
  );
}

export default App;
