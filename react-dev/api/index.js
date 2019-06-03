const DEV = require('./dev')

let API
switch(process.env.NODE_ENV) {
    case 'development':
        API = DEV
        break
    default:
        API = DEV
        break
}

module.exports = API