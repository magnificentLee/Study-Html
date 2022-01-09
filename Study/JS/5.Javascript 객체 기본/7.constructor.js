var kim = {
    name:"kim",
    first:20,
    second:30,
    third:10,
    sum:function(){
        return this.first+this.second+this.third;
    }
}

var lee = {
    name:"lee",
    first:10,
    second:20,
    third:30,
    sum:function(){
        return this.first+this.second+this.third;
    }
}
console.log("kim.sum()", kim.sum());
console.log("lee.sum()", lee.sum());
// 사례1 내장 객체 Date
// new 키워드를 이용해 새로운 객체를 만들어서(양산) 사용함
var d1 = new Date('2019-04-10');  // new 키워드를 이용해 새로 만들어야함(자바와 비슷한듯?)
console.log('d1.getFullYear()', d1.getFullYear());
console.log('d1.getMonth()', d1.getMonth()); // 0부터 카운팅하기 때문에 4대신 3이 나올것임

// 생성자 new
// 객체 생성 함수를 만들기, 객체 양산하기
function Person(name, first, second, third){
    this.name = name;
    this.first = first;
    this.second = second;
    this.third = third;
    this.sum = function(){
        return this.first+this.second+this.third;
    }
}

console.log('Person()', Person());
// 생성자를 이용해 Person 이라는 새로운 객체 만들기
console.log('new Person()', new Person());
// 생성자를 이용해 새로운 객체를 생성하기
var kimmy = new Person("kimmy", 10, 20, 30);
var leeroy = new Person("leeroy", 10, 10, 10);
console.log("kimmy.sum()", kimmy.sum());
console.log("leeroy.sum()", leeroy.sum());

// 생성자의 장점
// 새로운 객체를 계속 만들지 않고 생성자로 선언 및 속성값만 넣어주면 되기 때문에
// 유지보수의 효율이 좋을것임