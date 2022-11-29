/**
 * * txt 파일 읽어오기 작업
 * * HTML로 가공해야 함
 */

const http = require('http')
const fs = require('fs')
const url = require('url')
//! 1차 진행
//const server = http.createServer((req, res) => {
//  const alphaURL = url.parse(req.url);
//  const resource = alphaURL.pathname
//
//  if(resource == '/'){
//    fs.readFile()
//  }
//})
//! txt파일 을 그냥 한번 불러와 본것
//fs.readFile('header.txt', 'utf8', (err, data) => {
//  if(err) {
//    console.log("error")
//    return
//  }
//  console.log(data)
//})
//
//fs.readFile('main.txt', 'utf8', (err, data) => {
//  if(err) {
//    console.log("error")
//    return
//  }
//  console.log(data)
//})
//
//fs.readFile('footer.txt', 'utf8', (err, data) => {
//  if(err) {
//    console.log("error")
//    return
//  }
//  console.log(data)
//})
//! 2차 작업
//const server = http.createServer((request, response) => {
//  const html = fs.readFileSync('head.txt', (err) => {
//    if(err) throw err
//  })
//  if(request.method === 'GET'){
//    response.statusCode = 200;
//    response.writeHead('content-type', 'text/html')
//  } else if(request.method === "POST"){
//    let body  = "";
//    request.on('data', (data) => {
//      body += data
//      data = data.toString('utf8')
//      console.log(data, 'config/main.txt')
//    })
//  }
//})
//! appendFile 확인
const head = fs.readFileSync('head.txt', (err) => {
  if(err) throw err
})
const header = fs.readFileSync('./config/header.txt', (err) => {
  if(err) throw err
})
const main = fs.readFileSync('./config/main.txt', (err) => {
  if(err) throw err
})
const footer = fs.readFileSync('./config/footer.txt', (err) => {
  if(err) throw err
})
const body = fs.readFileSync('body.txt', (err) => {
  if(err) throw err
})

const database = fs.readFileSync('database.json', (err) => {
  if(err) throw err
})

fs.appendFileSync('body.txt', (header), (err) => {
  if(err) throw err
})
fs.appendFileSync('body.txt', (main), (err) => {
  if(err) throw err
})
fs.appendFileSync('body.txt', (footer), (err) => {
  if(err) throw err
})

const server = http.createServer((req, res) => {
  if(req.method === 'GET'){
    res.writeHead(200, {'content-Type':'text/html'})
    res.write(head)
    res.write(body)
  }
})

server.listen(5959, () => {
  console.log(`server start! http://localhost:5959`)
})


/**
 * * 문제점 1. writefile을 쓰자니 각 txt간 중첩이 안됨(body에 담기지 않는다.)
 * * 문제점 2. 위 선언한 body에 집어넣는 구문이 먼저 작동하지 않는다 혹은 작동하여 기록은 되었지만 첫 서버 호출에서 보이지 않는다.
 */