import React, { useState } from 'react';

const { ipcRenderer } = window.require('electron');

declare global {
  interface Window {
    require: any;
  }
}

function App() {
  const [directoryContents, setDirectoryContents] = useState([]);

  ipcRenderer.send('readDir');
  ipcRenderer.on('directoryContents', (event, arg) => {
    directoryContents !== arg && setDirectoryContents(arg);
  });

  return directoryContents.map(name => <div>{name}</div>);
}

export default App;
