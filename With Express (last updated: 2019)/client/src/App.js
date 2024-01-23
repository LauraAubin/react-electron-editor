import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = { readFile: 'empty' };
  }

  componentDidMount() {
    this.readFile('./server.js');
  }

  render() {
    const { readFile } = this.state;

    return (
      <div className='App'>
        <header className='App-header'>
          File contents of server.js:
          <div className='App-fileOutput'>{readFile}</div>
        </header>
      </div>
    );
  }

  fetchRequest = async (type, path, body) => {
    return await fetch(path, {
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json'
      },
      method: type.toUpperCase()
    });
  };

  readFile = async file => {
    await this.fetchRequest('post', 'readFile', { file })
      .then(resp => resp.json())
      .then(data => {
        this.setState({ readFile: data.fileContents });
      });
  };
}

export default App;
