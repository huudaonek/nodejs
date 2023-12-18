const http = require('http')
const port = process.eventNames.PORT || 3000

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type':'text/plant'})
    res.end('Hello word NodeJs')
})


server.listen(port, () => console.log(`server started on port ${port}; `+`press Crt-C to terminal....`));
