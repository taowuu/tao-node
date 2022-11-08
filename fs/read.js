const fs = require('fs')

fs.readFile('./tao.txt', 'utf8', (err, data) => {
    console.log('err ', err)
    console.log('data ', data)
})
