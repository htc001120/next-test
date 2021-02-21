import React from 'react';
import logo from './logo.svg';
import './App.css';
import SearchField from './components/SearchField';
import Result from './components/Result';

function App() {
  return (
    <div className="App">
      <SearchField search={() => {}} />
      <Result />
    </div>
  );
}

export default App;
