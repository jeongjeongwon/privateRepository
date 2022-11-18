/**
 * * 타입스크립트 interface 연습
 */
//? 1번
interface peopleAge {
  age : number;
}

function newAge(obj : peopleAge){
  console.log(obj.age)
}

let people = {name:"정원", age : 27};
newAge(people)

//? 2번(옵션속성 : 선택적 속성 적용이 가능함)
interface peopleAge2 {
  name : string;
  age?:number; //인터페이스에서 속성 선언시 끝에 ?를 붙임으로서 이 속성을 꼭 사용할 필요가 없다.
}

function newAge2(obj : peopleAge2){
  console.log(obj.name)
}

let people2 = {name: "정원"}
newAge2(people2)

//? 3번 (읽기 전용 속성 : 처음 생성할 때 값을 할당 후 변경이 불가능 함)
interface CraftBeer {
  readonly brand: string; //* 문법의 앞에 reacdonly를 통해 선언
}

/**
 * ? 4번 함수타입과 클레스 타입
 * ? 먼저 함수 후 class 시작
 */

interface selfcheck {
  (username : string, pw : string) : boolean;
}

let checkuser : selfcheck = function(id:string, pw:string){
  console.log('시용자를 확인했습니다.')
  return true;
}


// class
interface user {
  username: string; 
  print(name: string): void;
}

class Login implements user {
    username: string = 'sol';
    print(name: string) {
      console.log(name);
    }   
    constructor() {}
}
// 클레스는 정말 잘 모르겠다.