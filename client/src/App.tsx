import React from 'react';
import './App.css';

import { readDirectory } from './readDirectory';

class App extends React.Component {
  componentDidMount() {
    readDirectory();
  }

  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          Directory path:
          <div className='App-fileOutput' />
        </header>
      </div>
    );
  }
}

export default App;
