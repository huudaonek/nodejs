const http = require('http')
const port = process.eventNames.PORT || 3000

const server = http.createServer((req, res) => {

    const path =req.url.replace(/\/?(?:\?.*)?$/, '').tolowerCase()
    switch(path){
        case '':
        res.writeHead(200, { 'Content-Type': 'text/plant' })
        res.end('Homepage')
        break
        case '/about':
        res.writeHead(200,{'Content-Type':'text/plant'})
        res.end('About')
        break
        default:
        res.writeHead(200,{'Content-Type':'text/plant'})
        res.end('Not Found')
        break
    }
})
server.listen(port, () =>
  console.log(
    `server started on port ${port}; ` + `press Crt-C to terminal....`
  )
)
