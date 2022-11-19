//* 인터페이스 방식
interface PeopleInterface {
  name: string
  age: number
}

const me1: PeopleInterface = {
  name: 'yc',
  age: 34,
}

//* 사용자 정의 타입(Type) 방식
type PeopleType = {
  name: string
  age: number
}

const me2: PeopleType = {
  name: 'yc',
  age: 31,
}

/**
 * *둘의 방식은 유사하나 큰 차이점이 하나 존재
 * *인터페이스의 경우 속성을 추가하기 위해 같은 이름으로 다시 선언하여 병합이 가능하지만
 * *type의 경우 속성을 추가하기 위해 같은 이름으로 선언이 불가능
 */
interface Animal {
  weight: number;
}

interface Animal {
  height: number;
}

const tiger: Animal = {
  weight: 100,
  height: 200,
};

type _Animal = {
  weight: number;
};

//type _Animal = { //!rror : 식별자가 중복되어 사용이 불가능하다
//  height: string;
//};