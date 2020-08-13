const electron = require('electron')
const BrowserWindow = electron.remote.BrowserWindow;

const path = require('path')

window.functions = {
    openNewWindow: openNewWindow,
}

function openNewWindow() {
    const modalPath = path.join('file://', __dirname, 'sections/windowModal.html')
    let win = new BrowserWindow({width: 400, height: 320})
    win.on('close', () => {win=null})
    win.loadURL(modalPath)
    win.show()
}