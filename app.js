// const os = require('os')

// // info about current user
// const user = os.userInfo()


// // method returns the system uptime in seconds


// console.log(`The System Uptime is ${os.uptime()} seconds`);

// const currentOS = {
//     name: os.type(),
//     release: os.release(),
//     totalMem: os.totalmem(),
//     freeMem: os.freemem(),
// }

// console.log(currentOS)

// const path = require('path');

// console.log(path.sep);

// const filePath = path.join('/content', 'subfolder', 'test.txt');

// console.log(filePath)

// const base = path.basename(filePath);
// console.log(base);

// const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
// console.log(absolute);

const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.end('Welcome to our home page')
    }
    if(req.url === '/about'){
        res.end('Here is our short history')
    }
    res.end(`
    <h1>Oops!</h1>
    <p> We can't seem to find the page you are look for </p>
    <a href="/">back home </a>
    `)
})

const _ = require('lodash')

const items = [1, [2, [3, [4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems)
server.listen(5000)