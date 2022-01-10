// __proto__ 대신 Object.create 를 이용해 객체를 상속하는 새로운 객체를 만들 수 있음

var superObj = {superVal:"super"}
// 자식객체 , Object.create(부모객체); 부모객체 -> 자식객체 (상속)
var subObj = Object.create(superObj);
subObj.subVal = "sub";

console.log("subObj.subVal=>", subObj.subVal);
console.log("subObj.superVal=>", subObj.superVal);

subObj.subVal = "sub";
console.log("superObj.superVal=>", superObj.superVal);