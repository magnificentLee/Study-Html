class Person {
    constructor(name, first, second) {
        this.name = name;
        this.first = first;
        this.second = second;
        console.log("constructor");
    }
    sum() {  // 같은 클래스, 다른 메소드를 가진 상태
        return "prototype" + (this.first + this.second);
    }
}

var kim = new Person("kim", 10, 20);
kim.sum = function() {  // kim이라는 객체만큼은 다르게 동작시키고 싶다면 다음과 같이 수정하면 됨
    return "this : " + (this.first + this.second); 
}
var lee = new Person("lee", 10, 30);
console.log("kim.sum()", kim.sum());
console.log("lee.sum()", lee.sum());