import React from 'react';
import './App.css';
import 'bulma/css/bulma.min.css';

// importing store for global data store
import Store from './context/Store';

// importing other components
import {Navbar} from './components/Navbar';
import {AppWrapper} from './components/AppWrapper';

function App() {
  return (
    <Store>
      <div className="App">
        <Navbar title='Flat record' />
        <AppWrapper />
      </div>
    </Store>
  );
}

export default App;
