const { app } = require('electron').remote

const getVersion = () => {
    console.log(app.getVersion())
}

export default getVersion