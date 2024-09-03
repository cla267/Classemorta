const { app, BrowserWindow, ipcMain, dialog } = require('electron/main')
const path = require('node:path')
// const { EventEmitter } = require('node:events');

// var eventEmitter = new EventEmitter();

async function handleGetUserPath()
{
    return app.getPath("userData")
}

app.whenReady().then(() => {
  ipcMain.handle("get_user_path", handleGetUserPath)
  createWindow()

  app.on('activate', () => {
      if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            // nodeIntegration: true,
            preload: path.join(__dirname, 'preload.js')
        },
        frame:true,
        autoHideMenuBar: true
    })
    win.loadFile('main.html')
    // win.addListener("maximize", ()=>{
    //     win.webContents.send("max");
    // })
    // win.addListener("unmaximize", ()=>{
    //     win.webContents.send("min");
    // })
}

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})