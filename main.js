import { app, BrowserWindow } from "electron";
import "./server.js"; // start your http server

function createWindow() {
  const win = new BrowserWindow({
    width: 1000,
    height: 700,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  win.loadURL("http://localhost:8080");
}

app.whenReady().then(createWindow);
