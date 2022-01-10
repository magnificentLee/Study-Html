function Person(name, first, second){
    this.name = name;
    this.first = first;
    this.second = second;
}
Person.prototype.sum = function(){
    return this.first + this.second;
}

function PersonPlus(name, first, second, third){
    // this.name = name;
    // this.first = first;
    // this.second = second;
    // 다른 객체와 겹치기 때문에 다음과 같이 처리한다
    Person.call(this, name, first, second);
    this.third = third;
}
// PersonPlus.prototype.__proto__ = Person.prototype;
// 아래가 더 정확함
// PersonPlus.prototype = Object.create(Person.prototype);
// PersonPlus.prototype.constructor = PersonPlus;

PersonPlus.prototype.__proto__ = Person.prototype;

PersonPlus.prototype.avg = function(){
    return (this.first + this.second + this.third)/3;
}

var kim = new PersonPlus('kim', 10, 20, 30);
console.log("kim.sum()", kim.sum());
console.log("kim.avg()", kim.avg());
console.log("kim.constructor : ", kim.constructor);