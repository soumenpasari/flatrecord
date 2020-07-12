import React from 'react';
import './App.css';
import 'bulma/css/bulma.min.css';

// importing other components
import {Navbar} from './components/Navbar';
import {AppWrapper} from './components/AppWrapper';

function App() {
  return (
    <div className="App">
      <Navbar title='Flat record' />
      <AppWrapper />
    </div>
  );
}

export default App;
