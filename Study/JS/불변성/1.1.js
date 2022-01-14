let a = 10;
let b = a; // a = 10, b = a = 10
a = 20; // a = 20, b = a 따라서 b = 20 일까?
console.log(a, b); // 하지만 결과는 a = 20, b = 10 이 나옴
// 왜냐하면 자바스크립트에서 number 값은 불변성을 유지하기 때문에
// 새롭게 20이라는 값을 가지는 주소를 a에 할당하기 때문

// 자바스크립트에서 불변성을 유지하는 값과 그렇지 않은게 존재함
// boolean, number, string, null, undefined, symbol 과 같은 타입은 불변성
// object 타입은 변경 가능한 값