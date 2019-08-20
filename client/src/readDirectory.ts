declare var window: Window;
interface Window {
	require: any;
}

const { ipcRenderer } = window.require('electron');

declare global {
  interface Window {
    require: any;
  }
}

export function readDirectory() {
  ipcRenderer.send('hideWindow');
}
