const {ipcRenderer} = require('electron')

ipcRenderer.on("max", (evn) => {
    document.getElementById("titlebar").style.display = "none";
})
ipcRenderer.on("min", (evn) => {
    document.getElementById("titlebar").style.display = "block";
})