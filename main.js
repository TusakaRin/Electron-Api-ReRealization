const {app, BrowserWindow} = require('electron')
const path = require('path')

function createWindow () {
    let win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    })  // 创建窗口
    win.loadFile('index.html')  // 窗口加载html
    win.webContents.openDevTools()  // 打开chromium的开发者工具
}

app.whenReady().then(createWindow)
