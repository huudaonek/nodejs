const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get('/',(req ,res)=> {
    res.type('text/plain')
    res.send('Meadowlark travel')
})
app.get('/about',(req ,res)=> {
    res.type('text/plain')
    res.send('About Meadowlark travel')
})
app.use((req ,res)=> {
    res.type('text/plain')
    res.status(404)
    res.send('404 - not found')
})
app.get('/',(err, req ,res ,next)=> {
    console.error(err.message)
    res.type('text/plain')
    res.status(500)
    res.send('500 - sever error')
})

app.listen(port,()=> console.log (
    'Express started on http://localhost:${port};' + 'press Ctrl - C to terminal'

))

