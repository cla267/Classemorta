const { contextBridge, ipcRenderer} = require('electron')

contextBridge.exposeInMainWorld('main_variables', {
  path: () => ipcRenderer.invoke("get_user_path")
})