const nputData = [6, 2, 9, 8, 4, 0, 8, 5, 7, 1]
let tep = 0;

function BubbleSort(...num: any): any {
  console.time();
  let score: number;
    for(let i = 0; i < num.length; i++) {
      for(let j = 0; j < num.length -1 -i; j++) {
        if(num[j] > num[j + 1]){
          score = num[j];
          num[j] = num[j + 1];
          num[j + 1] = score;
        }
        tep++;
      }
    }
  console.log("총 연산수 : " + tep);
  return num;
}

console.log(BubbleSort(nputData));
