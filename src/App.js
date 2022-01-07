import React from 'react';
import './App.css';
import Search from './Components/Search';

function App(props){

  return (
    <div className="App">
      <div class="title-section">
        <h1 class="title">Monografías</h1>
      </div>
      <header className="App-header">
        <Search></Search>
      </header>
    </div>
  );
  
}

export default App;
