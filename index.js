const http = require('http')

const server = http.createServer((req, res) => {
    // req - so'rov
    // res - javob
    console.log(req.url)

    res.write('<h1>Hello world 5</h1>')
    res.write('<h1>Hello world 1</h1>')
    res.end()
})

server.listen(3000, () => {
    console.log('Server has been started on port: 3000')
})