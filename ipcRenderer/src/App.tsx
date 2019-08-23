import React, { useState } from 'react';

const { ipcRenderer } = window.require('electron');

declare global {
  interface Window {
    require: any;
  }
}

function App() {
  const [path, setPath] = useState('./');
  const [directoryContents, setDirectoryContents] = useState([]);

  const updatePath = event => setPath(event.target.value);

  const readDirectory = () => {
    ipcRenderer.send('readDir', path);
    ipcRenderer.on('directoryContents', (event, arg) => {
      directoryContents !== arg && setDirectoryContents(arg);
    });
  };

  return (
    <>
      <input onChange={updatePath} value={path} />
      <button onClick={readDirectory}>Read directory</button>

      {directoryContents.map(name => (
        <div>{name}</div>
      ))}
    </>
  );
}

export default App;
