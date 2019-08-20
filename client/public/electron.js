const { app, BrowserWindow, globalShortcut, ipcMain } = require('electron');

// const express = require('express');
const fs = require('fs');
// const bodyParser = require('body-parser');

const path = require('path');
const isDev = require('electron-is-dev');

let mainWindow;

app.on('ready', createWindow);

app.on('window-all-closed', function() {
  if (process.platform !== 'darwin') app.quit();
});

app.on('activate', function() {
  if (mainWindow === null) createWindow();
});

ipcMain.on('readDirectory', () => {
  // directoryContents('./');
  console.log('--------------------')
});

function readFile(path) {
  return fs.readFileSync(path, 'utf8');
}

function directoryContents(path) {
  return fs.readdirSync(path);
}

function createWindow() {
  // const app = express();
  // // kill this port
  // const port = process.env.PORT || 5000;

  // app.use(bodyParser.json());

  // app.post('/readFile', (request, response) => {
  //   const { file } = request.body;

  //   response.send({ fileContents: readFile(file) });
  // });

  // app.post('/readDirectory', (request, response) => {
  //   const { path } = request.body;

  //   response.send({ contents: directoryContents(path) });
  // });

  // app.listen(port, () => console.log(`Listening on port ${port}`));

  //-------------------------------------------

  mainWindow = new BrowserWindow({
    width: 1400,
    height: 900
  });

  mainWindow.loadURL(
    isDev
      ? 'http://localhost:3000/'
      : `file://${path.join(__dirname, '../build/index.html')}`
  );

  // mainWindow.webContents.openDevTools();

  mainWindow.on('closed', function() {
    mainWindow = null;
  });
}
