// const http = require('http')
// const fs = require('fs')

// const server = http.createServer((req, res) => {
//   if(req.method === 'POST'){
//     res.writeHead(200, {'content-type':'text/html'})
//     res
//   }
// })

// server.listen(3939, ()=>{
//   console.log(`http://localhost/3939`)
// })

const test = new URL('https://api.steampowered.com/ISteamApps/GetAppList/v2/');
const urlParams = test.searchParams

console.log(urlParams)

const first = urlParams.get('itemName')
console.log(first)

const second = urlParams.getAll('itemName')
console.log(second)

const Key = urlParams.keys()
console.log(Key)

const values = urlParams.values()
console.log(values)

const entry = urlParams.entries();
console.log(entry)
