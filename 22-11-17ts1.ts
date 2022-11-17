let count = 0;
count += 1;
//* count = '갑자기 분위기 문자열'; let count에 먼저 0의 num이 선언되어 있어 string형식의 문자열은 줄 수 없다.

const message: string = 'hello world'; 

const done: boolean = true; 

const numbers: number[] = [1, 2, 3]; 
const messages: string[] = ['hello', 'world']; 

//* messages.push(1);  // message에는 string이 선언되어있어서 숫자형식은 사용이 안됨

let mightBeUndefined: string | undefined = undefined; 
let nullableNumber: number | null = null; 

let color: 'red' | 'orange' | 'yellow' = 'red'; 
color = 'yellow';
//* color = 'green'; 