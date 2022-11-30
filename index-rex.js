import fs from 'fs'
import http from 'http'
import url from 'url'
//! 이제는 사장된 것 URLSearchParams 사용
import querystring from 'querystring'

const server = http.createServer((req, res) => {
  //? GET방식
  if(req.method === "GET"){
    fs.readFile('./example/index.html', (err, data) => {
      if(err) throw err
      res.writeHead(200, {'content-type':'text/html'})
      res.end(data)
    }) 
  //? POST 방식
  } else if(req.method === "POST"){
    req.on('data', (alpha) => {
      console.log(alpha.toString())
      //? 1차 시도
      let data = querystring.parse(alpha.toString())
      //? 2차 시도
      //let data = new URLSearchParams(alpha.toString())
      //? 3차 시도
      //let data = new URLSearchParams(location.search)
      //data.set('data', String(data))
      //const Beta = data.toString()
      res.writeHead(200, {'content-type':'text/html'})
      res.end('ID=' + data.id + "PW=" + data.pw)
      console.log(data)
    })
  }
})

server.listen(8888, (err)=>{
  if(err) throw err
  console.log(`serverStart! http://localhost:8888`)
})

/**
 * !POST 와 GET 차이
 * *가장 큰 특징은 GET이 '가져오는 개념' 이라면 POST의 경우 '보낸다의 개념' 에 가까운것 같다.
 * * GET의 경우 받아온 값을 쿼리 스트링으로 넘기는데 이는 일부 로그인과 같은 비밀유지에 문제가 발생한다. (ex. 프로토콜/호스트:포트/경로 ? 쿼리스트링)
 * * POST의 경우는 URL에 파라미터 값을 넘기지 않으며
 * * 쿼리스트링 : URL뒤에 입력 받은 데이터를 같이 제공하는 데이터 전달 방법
 * ! 더 학습이 필요한것 
 * * 일단 URLSearchParams에 대한 학습이 필요하다 여겨짐
 */