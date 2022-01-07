import React from 'react';
import './App.css';
import Search from './Components/Search';

function App(props){

  return (
    <div className="App">
      <h1 class="">Monografías</h1>
      <div class="spacer layer1"></div>
      <header className="App-header">
        <Search></Search>
      </header>
    </div>
  );
  
}

export default App;
