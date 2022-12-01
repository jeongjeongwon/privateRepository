/**
 * ! 여긴 URL을 연습하기 위한 장소입니다.
 * * 기존에 계속해서 querystring을 사용했지만 이제는 URLSearchParams를 연습해 볼 차례
 * * 메소드도 굉장히 많더라
 */

//* 1차 예제 연습
const test1 = new URL('https://marketplace.visualstudio.com/items?itemName=ZainChen.json');
const urlParams = test1.searchParams;
//? console.log(urlParams)의 결과값 => URLSearchParams { 'itemName' => 'ZainChen.json' }
console.log(urlParams)
//? console.log(first)의 결과값 => ZainChen.json
const first = urlParams.get('itemName')
console.log(first)
//? console.log(second)의 결과값 => [ 'ZainChen.json' ]
const second = urlParams.getAll('itemName')
console.log(second)
//? console.log(Key)의 결과값 => URLSearchParams Iterator { 'itemName' }
const Key = urlParams.keys()
console.log(Key)
//? console.log(values)의 결과값 => URLSearchParams Iterator { 'ZainChen.json' }
const values = urlParams.values()
console.log(values)
//? console.log(entry)의 결과값 => URLSearchParams Iterator { [ 'itemName', 'ZainChen.json' ] }
const entry = urlParams.entries();
console.log(entry)


/**
 * ! 정리 정리 정리
 * * URLsearchParams의 경우 파라미터값을 출력해주는 작업을 한다.
 * * get의 경우 지정한 'parameterName'의 첫번째 값을 출력한다
 * * getAll의 경우 지정한 'parameterName'의 모든 값을 출력한다(배열 형식이라는 것을 보면 알수 있음)
 * * keys의 경우 해당 주소에 위치한 파라미터의 키값들의 리터럴 값을 return함
 * * values의 경우 해당 주소에 위치한 파라미터의 value값들의 리터럴 값을 return함
 * * entries의 경우 해당 주소에 위치한 파라미터의 키값과 value값들의 리터럴 값을 return함
 */