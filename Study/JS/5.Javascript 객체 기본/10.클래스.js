class Person{
    constructor(name, first, second){
        this.name = name;
        this.first = first;
        this.second = second;
    }
}

var kim = new Person("kim", 10, 20);
console.log("kim", kim);

// constructor 함수
// 객체의 초기 값을 지정하기 위해서 객체가 생성될 때 실행되기로 약속된 함수
// 이 함수를 이용해 객체의 초기 값을 설정할 수 있음

// 클래스 내에서 객체를 생성할 때 constructor(생성자)함수가 먼저 호출됨