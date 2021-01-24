const fs = require('fs')
const path = require('path')

const saveData = (array, fileName)=>{
    let dataString = JSON.stringify(array)
    let filePath = path.join('data', fileName)
    fs.writeFileSync(filePath,'module.exports =')
    fs.appendFileSync(filePath, dataString)
}

module.exports = saveData