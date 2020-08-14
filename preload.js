const electron = require('electron')
const BrowserWindow = electron.remote.BrowserWindow;

const path = require('path')

window.functions = {
    openNewWindow: openNewWindow,
    windowListenReszie: windowListenReszie,
    windowListenBlurFocus: windowListenBlurFocus,
    showFramelessWindow: showFramelessWindow,
}

function openNewWindow() {
    const modalPath = path.join('file://', __dirname, 'sections/windowModal.html')
    let win = new BrowserWindow({width: 400, height: 320})
    win.on('close', () => {win=null})
    win.loadURL(modalPath)
    win.show()
    return win
}

function windowListenReszie() {
    const modalPath = path.join('file://', __dirname, 'sections/windowModal.html')
    let win = new BrowserWindow({width: 400, height: 320})
    win.on('resize', updateReply)
    win.on('move', updateReply)
    win.on('close', closed)
    win.loadURL(modalPath)
    win.show()

    function updateReply () {
        const manageWindowReply = document.getElementById('manage-window-reply')
        const message = `Size: ${win.getSize()} Position: ${win.getPosition()}`
        manageWindowReply.innerText = message
    }

    function closed () {
        win = null;
        document.getElementById('manage-window-reply').innerText = 'Closed!'
    }
}

function windowListenBlurFocus() {
    const modalPath = path.join('file://', __dirname, 'sections/windowModal.html')
    let win = new BrowserWindow({width: 400, height: 320})
    let focusBtn = document.getElementById('focusBtn')
    function hideFocusBtn () {
        focusBtn.style.visibility = "hidden"
    }
    function showFocusBtn () {
        focusBtn.style.visibility = 'visible'
    }
    function focus () {
        win.focus()
    }
    win.on('blur', showFocusBtn)
    win.on('focus', hideFocusBtn)
    win.on('close', ()=>{
        hideFocusBtn()
        win = null
    })
    win.loadURL(modalPath)
    win.show()
    focusBtn.addEventListener('click', focus)    
}

function showFramelessWindow () {
    const modalPath = path.join('file://', __dirname, 'sections/windowModal.html')
    let win = new BrowserWindow({width: 400, height: 320, frame: false})
    win.on('close', ()=>{win=null})
    win.loadURL(modalPath)
    win.show()
}