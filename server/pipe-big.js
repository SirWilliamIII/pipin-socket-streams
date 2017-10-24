const fs = require('fs'),
    express = require('express'),
    path = require('path')

const app = express()
const port = 4444
    
const pathName = path.join(__dirname, '../images/girl.jpg')


app.get('/img', (req, res) => {
    
    let readStream = fs.createReadStream(pathName)
    
    readStream.pipe(res)
})


app.listen(port, () => {
    console.log('====================================');
    console.log(`Listening on port ${port}`);
    console.log('====================================');        
})