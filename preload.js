const { ipcRenderer, shell } = require("electron");

window.ipcRenderer = ipcRenderer;
window.openExternal = shell.openExternal;
