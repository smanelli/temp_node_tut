const http = require('http')

const server = http.createServer((req,res)=>{
    if(req.url === '/') {
        res.end('ciao mondo')
    }
    else if(req.url === '/about') {
        res.end('about')
    }
    else {
        res.end(`
            <h1>Ooops!</h1>
            <p>No page</p>
            <a href="/">Back home</a>
        `)
    }
})

const _ = require('lodash')

const items = [1,[2,[3,[4]]]]
const newItems = _.flattenDepth(items)
console.log(newItems)


server.listen(5000)