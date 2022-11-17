//! 데이터 값 특정 및 계산
//! 고정 지출 목록이 존재
//! 고정 지출 목록의 지정값인 100,000원 선에서 게임을 구매해야함
//! 게임 가격은 64,800
//? 우선 각 고정지출 목록에 등록된 물간들의 각각의 총 금액을 구해보자
const fixCostA = {
  "출퇴근비용" : {
    "카카오톡자전거" : "1500원",
    "택시" : "3500원",
  },
  "커피" : {
    "엔시나" : "4500원",
    "카누" : "200원",
  },
  "고양이간식" : {
    "닭고기" : "400원",
    "락토프리우유" : "800원",
  }
}

const fixCostB = {
  "출퇴근비용" : {
    "카카오톡자전거" : "19회",
    "택시" : "3회",
  },
  "커피" : {
    "엔시나" : "6잔",
    "카누" : "15잔",
  },
  "고양이간식" : {
    "닭고기" : "30개",
    "락토프리우유" : "2개",
  }
}

const totalcost = 100000;
const game = 64800;

//let bike = Object.values(fixCostA.출퇴근비용.카카오톡자전거)
/**
 * slice 사용해서 뒤의 "원"(문자) 삭제
 */
let bikeA = fixCostA.출퇴근비용.카카오톡자전거.slice(0,-1)
let bikeB = fixCostB.출퇴근비용.카카오톡자전거.slice(0,-1)
let totalbike = bikeA * bikeB

let texiA = fixCostA.출퇴근비용.택시.slice(0,-1)
let texiB = fixCostB.출퇴근비용.택시.slice(0,-1)
let totaltexi = texiA * texiB

let coffeA = fixCostA.커피.엔시나.slice(0,-1)
let coffeB = fixCostB.커피.엔시나.slice(0,-1)
let totalcoffe = coffeA * coffeB

let kanuA = fixCostA.커피.카누.slice(0,-1)
let kanuB = fixCostB.커피.카누.slice(0,-1)
let totalkanu = kanuA * kanuB

let chickenA = fixCostA.고양이간식.닭고기.slice(0,-1)
let chickenB = fixCostB.고양이간식.닭고기.slice(0,-1)
let totalchicken = chickenA * chickenB

let milkA = fixCostA.고양이간식.락토프리우유.slice(0,-1)
let milkB = fixCostB.고양이간식.락토프리우유.slice(0,-1)
let totalmilk = milkA * milkB

let total = totalbike + totaltexi + totalcoffe + totalkanu + totalchicken + totalmilk

const change = totalcost - total
const changepoke = game - change

console.log("카카오 자전거 총 사용 금액 : " + totalbike)
console.log("택시 총 사용 금액 : " + totaltexi)
console.log("엔시나 총 사용 금액 : " + totalcoffe)
console.log("카누 총 사용 금액 " + totalkanu)
console.log("고양이 총 사료 금액 : " + totalchicken)
console.log("고양이 총 우유 금액 : " + totalmilk)
console.log("총 금액은 : " + total)
console.log("여유 고정 금액 : " + change)
console.log("여유 고정 금액을 제외한 게임을 구매하는데 필요한 금액 : " + changepoke)
// 엔시나 X 택시 X 자전거 7X 카누 2X

/**
 * 일단 각각의 총 값을 구해놓음...
 * 이제 필요한것 : 반복되는 구문이 많으니 축약시키기, 변화할수 있는 상황에서 적용하도록 만들기
 * 정해진 가격에서 최소한으로 필요한 금액 마련 어떤것을 얼마나 절약
 * 고양이 관련 물품은 건들어서는 안됨
 */

function commingsoon(a, b, c, d){
  const result = changepoke - (bikeA * a + texiA * b + coffeA * c + kanuA * d)
  if(result > 0) {
    console.log(result + " 만큼 금액 부족")
  } else if (result <= 0) {
    console.log((a + b) + "번 빨리 일어나면 되고 " + (a + b) + "번 만큼 피로해짐 " + (c + d) + "번 만큼 몰래 먹으면 되지만 " + (c + d) + "번 만큼 미움받는다")
  } else {
    console.log("오류발생")
  }
}

commingsoon(7, 3, 6, 2)