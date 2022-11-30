/**
 * ! 파일 업로드작업(복잡한 파일 업로드가 아닌 간단한 txt파일 같은것 저장 POST로 하기)
 * * 음.... POST 사용해서 JSON형태로 전송하는 연습을 해볼까?
 * * 순서는 일단 POST로 전송해보고 2차로 JSON형태로 전송하는걸 해보자
 */

import http from 'http'
import fs from 'fs'
import querystring from 'querystring'

const server = http.createServer((req, res) => {
  let test=''
  if(req.method === 'GET'){
    fs.readFile('./example2/index2.html', (err, data) => {
      if(err) throw err
      res.writeHead(200, {'content-type':'text/html'})
      res.end(data)
    })
  } else if(req.method === 'POST'){
    req.on('data', (data) => {
      //console.log(data.toString())
      let rara = []
      rara += decodeURI(data)
      // rara += data.map((file) => {
      //   return file
      // })
      console.log(rara)
      console.log(typeof rara)
      let power = rara.split('&')
      console.log(power)
      const text = JSON.stringify(power, null, 2)
      fs.writeFileSync("./test.json", text)
      // console.log(data.toString())
      
      const alpha = querystring.parse(rara.toString())
      res.writeHead(200,{'content-type':'text/html; charset=utf-8'})
      res.end("ID = " + alpha.id + "PW = " + alpha.pw)
    })
  }
})

server.listen(5757, (err) => {
  if(err) throw err;
  console.log(`server start http://localhost:5757`)
})

/**
 * ! 일단 정리 부터
 * * 일반적인 GET으로 HTML파일을 가져오는것은 전에 했던 방식과 동일
 * * POST에서 text라는 객체생성하여 그 안에 JSON.stringify를 선언 data.toString()내부의 정보를 JSON문자열로 변경하는 작업 진행
 * * 다음 writeFileSync를 통해 만일 지정된 주소값의 폴더 위치에 text.json형식의 파일이 존재하지 않으면 생성과 동시에 내용을 JSON문자열로 변경한 내용 저장 있다면 내용을 이번에 입력한 정보로 변환하는 과정
 * * writeFile : 입력한 주소정보에 위치한 파일의 내용을 새로 갱신 하거나 없다면 생성시키는 메소드, 비슷한 메소드로는 appendfile이 존재함
 * * appendfile : 이것의 경우 새로 파일을 생성하는 기능은 없지만 새로운 내용을 업데이트하는 것은 가능 차이로는 같은 기존의 내용을 삭제하지 않고 내용을 업데이트한다. 즉 중첩됨 내용이
 * ? data.toString()에서 toString()을 제거하면 버퍼 형식으로 출력됨
 * ? decodeURI를 통해 data에 담기는 영어가 아닌 코드가 정상적으로 저장되게 바꿈
 * ! 문제점
 * * 현제 문제점은 배열 형식으로 저장되지 않음
 * * 확인 버튼도 저장되는 문제 발생... ㄷㄷ
 * * URLSearchParams를 사용하지 않고 queryString을 사용함 이는 URLSearchParams에 대해 이해하고 다른 버전으로 한번 작성 연습 예정
 */