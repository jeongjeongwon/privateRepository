const fs = require('fs')

/**
 * *하나의 배열을 만들어 그 안에 .txt파일의 이름을 정렬
 * ? 왜? 아마 다른 페이지가 생성될때 마다 동적으로 추가하기 위해?
 * * contaner이라는 하나의 배열 생성후 readdir을 사용하여 config라는 폴더 안에 있는 파일 목록 불러오기 실행
 * * 받아온 파일목록 thon에 저장 후 map을 사용하여 새로운 배열로 정렬
 * * database라는 객체 생성 stringify를 사용하여 객체값을 JSON형태로 변경하는 작업
 * * writeFileSync를 사용하여 파일 쓰기 진행(만일 같은 파일이 있다면 내용 변경 없다면 파일을 생성하는 작업까지 진행)
 */
fs.readdir('./config', (err, thon) => {
  let contaner = [];
  if(err) throw err
  contaner += thon.map((filename) => {
    return filename
  })
  const database = JSON.stringify(thon, null, 2);
  fs.writeFileSync('database.json', database)
  console.log(contaner)
})