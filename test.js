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
//! 구분선
// const test = new URL('https://api.steampowered.com/ISteamApps/GetAppList/v2/');
// const urlParams = test.searchParams

// console.log(urlParams)

// const first = urlParams.get('appid')
// console.log(first)

// const second = urlParams.getAll('appid')
// console.log(second)

//!구분선
const http = require('http')
const fs = require('fs')

STEAM_URL = 'https://api.steampowered.com/ISteamApps/GetAppList/v2/'
STEAM_KEY = 'FFE4921495FB8D549AD64EB2D18F91FD'