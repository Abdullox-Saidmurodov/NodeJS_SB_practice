const http = require('http')
const fs = require('fs')
const path = require('path')

const server = http.createServer((req, res) => {
    // // req - so'rov
    // // res - javob
    // // console.log(req.url)
    // console.log(req.method)

    // // res.write('<h1>Hello world 5</h1>')
    // // res.write('<h1>Hello world 1</h1>')
    // res.end('<h1>Hello world 4</h1>')

    if(req.method === 'GET') {
        // res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})

        res.writeHead(200, {'Content-Type': 'text/html'})
        if(req.url === '/') {
            fs.readFile(path.join(__dirname, 'templates', 'index.html'), 'utf-8', (err, conten) => {
                if(err) throw new err
                res.end(conten)
            })
        } else if(req.url === '/about') {
            fs.readFile(path.join(__dirname, 'templates', 'about.html'), 'utf-8', (err, conten) => {
                if(err) throw new err
                res.end(conten)
            })
        } else if(req.url === '/contact') {
            fs.readFile(path.join(__dirname, 'templates', 'contact.html'), 'utf-8', (err, conten) => {
                if(err) throw new err
                res.end(conten)
            })
        } else if(req.url === '/api/admin') {
            // res.writeHead(200, {'Content-Type': 'text/json'})

            const admin = {name: 'Abdullox', surname: 'Saidmurodov', job: 'Full-Stack developer'}

            res.end(JSON.stringify(admin))
        }
        // res.end(`
        //     <h3>Send name</h3>
        //     <form method="post" action="/">
        //         <input name="name" type="name" placeholder="Enter your name" />
        //         <button type="submit">Send name</button>
        //     </form>
        // `)
    } else if(req.method === "POST") {
        const body = []

        req.on('data', data => {
            // body.push(Buffer.from(data).toString())
            body.push(Buffer.from(data))
        })

        req.on('end', () => {
            const message = body.toString().split('=')[1]
            res.end(`Name successfully added: ${message}`)
        })

        // req.on('end', () => {
        //     console.log(body)
        // })

    }
})

server.listen(3000, () => {
    console.log('Server has been started on port: 3000')
})