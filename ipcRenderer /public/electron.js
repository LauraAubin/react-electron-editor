const { app, BrowserWindow, ipcMain } = require('electron');

const fs = require('fs');
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

ipcMain.on('readDir', (event, args) => {
  event.reply('directoryContents', fs.readdirSync(args));
});

function createWindow() {
  mainWindow = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true
    },
    width: 400,
    height: 400
  });

  mainWindow.loadURL(
    isDev
      ? 'http://localhost:3000/'
      : `file://${path.join(__dirname, '../build/index.html')}`
  );

  mainWindow.center();

  // mainWindow.webContents.openDevTools();

  mainWindow.on('closed', function() {
    mainWindow = null;
  });
}
