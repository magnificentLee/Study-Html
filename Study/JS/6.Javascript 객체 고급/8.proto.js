// 자바스크립트의 함수는 객체임 따라서 property를 가질 수 있고 다음과 같이 나타낼 수도 있음
function Person(name, first, second){
    this.name = name;
    this.first = first;
    this.second = second;
}
// Person이라는 함수를 생성하면 Person이라는 객체와 Person의 prototype 객체가 생성됨
// 그리고 두 객체는 서로 연관되어있기 때문에 서로의 존재를 알아야함
// Person 객체의 prototype은 Person의 Prototype 객체를 가리킴
// Person의 prototype 객체도 Person에 속해있다는 것을 표시하기 위해서
// constructor 프로퍼티에 Person 객체를 기록함, 즉 서로 참조하는 상태임

// sum이라는 메소드를 추가하면
Person.prototype.sum = function(){
    return this.first + this.second
}
// Person의 prototype 객체에 sum이라는 메소드가 추가됨

// 생성자를 이용해 새로운 객체를 생성
var kim = new Person("kim", 10, 20);
// kim 이라는 객체는 constructor 함수가 실행되면서 this의 값이 세팅된 결과 프로퍼티 값들이 생성되고
// 동시에 __proto__ 라는 프로퍼티도 생성됨
// 자바스크립트는 __proto__의 값으로 해당 객체를 생성한 생성자의 prototype을 가리키게 함

// 새로운 객체를 생성해도 마찬가지로 같은 모습
var lee = new Person("lee", 10, 10)

// 어떤 객체에서 메소드나 프로퍼티를 호출할때 자바스크립트는 먼저 해당 객체에 호출하려는 값이 있는지 살피고
// 없다면 그 객체의 __proto__ 프로퍼티가 가리키는 prototype 객체에서 호출하려는 값을 찾음
console.log(kim.name);
kim.sum();