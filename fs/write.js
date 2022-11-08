const fs = require('fs')

fs.writeFile('./tao.txt', '666', (err) => {
    console.log('err ', err)
})
