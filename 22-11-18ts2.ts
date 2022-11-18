/**
 * *인터페이스는 선언만 존재
 * *멤버 변수와 멤버 메서드를 선언할 수 있지만 접근 제한자는 설정할 수 없음
 * *인터페이스는 타입 선언이 많아도 컴파일(ES6) 후에는 모두 사라짐
 * *런타임 성능에 영향을 끼치지 않는다.
 */

interface MyGun {
  bullet: number;          
  shotGun(): void;         
  getBulletInfo(): number; 
}

class RazerGun implements MyGun {
  bullet: number;

  constructor() {
      this.bullet = 4;
  }

  shotGun() {
      console.log("빵");
      this.bullet--;
  }

  getBulletInfo(): number {
      return this.bullet;
  }
}