// 주어진 것 : 하나의 문자열 뭉치
// 원하는 것 : 주어진 문자열에서 여러 알파벳이 사용된 빈도수(개수)
// count = 0 을 집어넣고 반복하여 확인는 갯수 대로 count 증가

const fromInput = " It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like) "

/**
 * ? 1차 풀이 단순하게 만들었다. 원하는 알파벳의 갯수를 세기위해 하단에 text_listup에 문자를 입력하면 몇갠지 새어준다.
 * ? 당연히 전부를 쉽게 알수 있도록 만든것이 아니니 폐기
 */
//function text_listup(alpha){
//  let word = [alpha]
//  let count = 0;
//  let word_count = fromInput.indexOf(word)
//  while(word_count !== -1){
//    count++
//    word_count = fromInput.indexOf(word, word_count + 1)
//  }
//  console.log(count)
//}
//
//text_listup('a')

function text_listup(alpha){
  let word = [alpha]
  let count = 0;
  let word_count = fromInput.indexOf(word)
  while(word_count !== -1){
    count++
    word_count = fromInput.indexOf(word, word_count + 1)
  }
  console.log(count)
}
text_listup(alphabet)

//const alphabet = "abcdefghijklmnopqrstuvwxyz"
//
//let count = new Array(26).fill(0)
//fromInput.for(i => count[alphabet.indexOf(i)]++);
//console.log(count.join(" "))
