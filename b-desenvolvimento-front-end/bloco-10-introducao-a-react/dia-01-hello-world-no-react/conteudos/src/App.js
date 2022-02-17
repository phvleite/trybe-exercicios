import Header from './Header';
import React from 'react';
import Content from './Content';
import './App.css';

function App() {
  return (
    <div>
      <header className='App-header'>
        <Header />
      </header>
      <div className='App'>
        <Content />
      </div>  
    </div>
  );
}

export default App;
