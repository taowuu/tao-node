const fs = require('fs')

fs.readFile('./tao.txt', 'utf8', (err, data) => {
    if(!err) {
        const newData = data + ' append'
        fs.writeFile('./tao.txt', newData, (err) => {
            if(!err) {
                console.log('追加成功')
            }
        })
    }
})
