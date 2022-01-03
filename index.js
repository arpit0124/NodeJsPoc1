const http = require('http');
const url = require('url');
const fs = require('fs')
function renderHTML(path, res) {
    fs.readFile(path, null, function (error, data) {
        if (error) {
            res.writeHead(404);
            res.write('File not found!');
        } else {
            res.write(data);
        }
        res.end();
    });
}
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    let path = url.parse(req.url).pathname;
    let date = new Date()
    switch (path) {
        case '/':
            renderHTML('./index.html', res);
            break;
        case '/monday':
            res.write('<h1>Monday ' + date.toLocaleTimeString() + '</h1>')
            res.end()
            break;
        case '/tuesday':
            res.write('<h1>Tuesday ' + date.toLocaleTimeString() + '</h1>')
            res.end()
            break;
        case '/wednesday':
            res.write('<h1>Wednesday ' + date.toLocaleTimeString() + '</h1>')
            res.end()
            break;
        case '/thursday':
            res.write('<h1>Thursday ' + date.toLocaleTimeString() + '</h1>')
            res.end()
            break;
        case '/friday':
            res.write('<h1>Friday ' + date.toLocaleTimeString() + '</h1>')
            res.end()
            break;
        case '/saturday':
            res.write('<h1>Saturday ' + date.toLocaleTimeString() + '</h1>')
            res.end()
            break;
        case '/sunday':
            res.write('<h1>Sunday ' + date.toLocaleTimeString() + '</h1>')
            res.end()
            break;
        default:
            res.writeHead(404);
            res.write('Route not defined');
            res.end();
    }
})

const PORT = 5000

server.listen(PORT, () => console.log(`Server running on port ${PORT}`))