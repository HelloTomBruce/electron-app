const { app } = require('electron').remote
const ipcRenderer = require('electron').ipcRenderer

const getVersion = () => {
    console.log(app.getVersion())
}

console.log(ipcRenderer.sendSync('synchronous-message', 'ping'))

ipcRenderer.on('asynchronous-reply', (evnet, arg) => {
    console.log(arg)
})

ipcRenderer.send('asynchronous-message', 'ping')


export default getVersion