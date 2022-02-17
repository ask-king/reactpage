import React from 'react';
import logo from './logo.svg';
import './App.css';
import image from './assets/images/logo.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello!</h1>

        <div>
          <img src={image}/>
        </div>
        
      </header>
    </div>
  );
}

export default App;
