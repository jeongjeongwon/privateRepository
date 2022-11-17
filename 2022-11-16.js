//! 무작위 데이터 배열 정렬
//! 함수 이름은 sortArray()
//! 주어진 배열 데이터 inputData

/**
 * ? 단순 작업 for 문을 계속 돌리는 원시적...
 * ? 이런 모양을 무엇이라 명칭하던것 같다
 * ? step은 몇번 출력됬는지 확인하는 용도
 */

const inputData = [6, 2, 9, 8, 4, 0, 8, 5, 7, 1]
let step = 0;

function sortArray(num){
  for(let i = 0; i < inputData.length; i++){
    let score
    for(let j = 0; j < inputData.length - 1 - i; j++){
      if(num[j] > num[j + 1]){
        score = num[j];
        num[j] = num[j + 1];
        num[j + 1] = score
      }
      step++;
    }
    if(!score){
      break;
    }
  }
  console.log("총 연산 : " +  step)
  return num
}

console.log(sortArray(inputData))