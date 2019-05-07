const { app, BrowserWindow, Menu } = require('electron')
const ipcMain = require('electron').ipcMain
const path = require('path')
const debug = /--debug/.test(process.argv[2])

function createWindow () {
    const windowOptions = {
        width: 1200,
        height: 960,
        minWidth: 1080,
        title: app.getName(),
        center: true,
        resizable: true,
        closable: true,
        icon: path.resolve(__dirname, '/app.ico'),
        backgroundColor: '#f0f0f0',
        hasShadow: true,
        webPreferences: {
            nodeIntegration: true,
            webSecurity: false
        },
        // frame:false,  // 隐藏状态栏
        // titleBarStyle: 'hidden'  //mac隐藏状态栏
    }
    let win = new BrowserWindow(windowOptions)
    menuConfig = []
    const menu = Menu.buildFromTemplate(menuConfig)
    Menu.setApplicationMenu(menu)
    win.loadFile('./react-dev/dist/index.html')
    if (debug) {
        win.webContents.openDevTools()
    }
    win.on('closed', () => {
        win = null
    })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    if (win === null) {
        createWindow()
    }
})

ipcMain.on('asynchronous-message', function(event, arg) {
    console.log(arg)
    event.sender.send('asynchronous-reply', 'pong')
})

ipcMain.on('synchronous-message', (event, arg) => {
    console.log(arg)
    event.returnValue = 'pong'
})