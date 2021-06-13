// Modules to control application life and create native browser window
const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");
const services = require("./services");
const isDev = require("electron-is-dev");

const INDEX_PATH = path.join(__dirname, isDev ? "build" : "..", "index.html");

let mainWindow;

ipcMain.on("min-window", () => {
  mainWindow.minimize();
});
ipcMain.on("close-window", () => {
  mainWindow.close();
});

ipcMain.on("get_app_version", (e) => {
  e.reply("get_app_version", app.getVersion());
});

ipcMain.on("check_status", (e) => {
  services
    .checkStatus()
    .then((data) => {
      e.reply("check_status", { error: false, data });
    })
    .catch((err) => {
      e.reply("check_status", { error: true, data: err });
    });
});

ipcMain.on("toggle_status", (e, newState) => {
  services
    .toggleStatus(newState)
    .then(() => {
      services.checkStatus().then((data) => {
        e.reply("toggle_status", { error: false, data });
      });
    })
    .catch((err) => {
      e.reply("toggle_status", { error: true, data: err });
    });
});

function createWindow() {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    show: false,
    width: 400,
    height: 650,
    resizable: false,
    frame: false,
    maximizable: false,
    center: true,
    backgroundColor: "#1b1c1d",
    webPreferences: {
      contextIsolation: false,
      preload: path.join(__dirname, "preload.js"),
    },
  });

  // and load the index.html of the app.
  // mainWindow.loadURL("http://localhost:3000");
  mainWindow.loadFile(INDEX_PATH);
  // Open the DevTools.
  // mainWindow.webContents.openDevTools()

  mainWindow.on("ready-to-show", () => {
    if (mainWindow) {
      mainWindow.show();
      mainWindow.focus();
    }
  });
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow();

  app.on("activate", function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on("window-all-closed", function () {
  if (process.platform !== "darwin") app.quit();
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
