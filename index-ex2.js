/**
 * ! 파일 업로드 2차 이번에는 날짜도 집어 넣어 보자
 * * 형식은 어제랑 같지만 이번에는 금일 날짜도 JSON형태에 저장해야됨...
 * * 이번에는 어떻게 해보지..?
 * * 엔터 형식이네..?(근데 이거 그냥 input에 속성 submit으로 하면 되지 않나?)
 */

import http from 'http'
import fs from 'fs'
import querystring from 'querystring'
const port = 5580
const count = new Date()

const server = http.createServer((req, res) => {
  if(req.method === 'GET'){
    fs.readFile('./example2/index2.html', (err, data) =>{
      if(err) throw err;
      res.writeHead(200, {'content-type':'text/html'});
      res.end(data)
    })
  } else if(req.method === 'POST'){
    req.on('data', (data) => {
      let alpha = [];
      alpha += decodeURI(data)
      let beta = alpha.split('&')
      console.log(beta)
      const text = JSON.stringify([beta, count], null, 2)
      fs.writeFileSync('./test2.json', text)
      const gamma = querystring.parse(alpha.toString())
      res.writeHead(200, {'content-type':'text/html; charset=utf-8'})
      res.end("ID = " + gamma.id + " PW = " + gamma.pw + " Time = " + count)
    })
  }
})

server.listen(port, (err) => {
  if(err) throw err
  console.log(`server start! http://localhost:${port}`)
})

/**
 * ! 정리 정리 정리
 * * 음... 입력된 값을 JSON형태로 바꾸는 코드인데... new date()는 어떤 형식으로 집어넣어야 하나
 * * new Date() 집어 넣음
 * * 이번에는 음... 일단 쿼리 스트링 대신 URLSearchParamse를 연습해볼까 일단 구문부터 살펴보자 저번에 봤는데 잘 모르겠음
 * * 진짜 모르겠네
 * * 이중으로 내용이 JSON파일에 저장되는 문제 해결(원인을 모름)
 * * JSON안에 계속해서 빈배열을 할당하는 문제가 있어 기존의 배열안에 내용을 추가하는 방향으로 진행해야함
 * ? URLsearchParams의 경우 전송된 파라미터 값을 가져오는 것이기 때문에 POST로는 사용이 불가능(POST는 파라미터 값을 넘기지 않기 때문)
 */