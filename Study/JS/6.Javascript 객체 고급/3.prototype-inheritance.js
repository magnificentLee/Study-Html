var superObj = {superVal:"super"}
var subObj = {subVal:"sub"}
subObj.__proto__ = superObj;
console.log("subObj.subVal =>", subObj.subVal);
console.log("subObj.subVal =>", subObj.superVal);

// prototype : 생성자 함수 바깥에서 메소드를 정의해 객체가 생성될때마다 중복으로 호출되는 것을 방지
// __proto__ : 객체 간의 상속관계를 정의, 한 객체의 속성을 다른 객체가 상속 받을 수 있게함