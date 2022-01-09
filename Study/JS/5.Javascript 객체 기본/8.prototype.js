function Person(n, f, s, t){
    this.name = n;
    this.first = f;
    this.second = s;
    this.third = t;
}
// 원형 prototype
// 공통되는 메소드를 굳이 계속 생성하지 않고 딱 한 번 선언하여
// 메모리의 낭비를 막는다
// 주의할 점
// 계산할 수치들과 문자열이 동시에 출력하는 경우
// 문자열과 계산할 수치들을 더해버리면 문자열로 취급하여 더하게됨
// 따라서 괄호로 묶어서 더해야 이러한 오류가 발생하지 않는다
Person.prototype.sum = function(){
    // return "prototype" + this.first+this.second+this.third;
    // 해당 코드의 결과는 prototype102030 이 나오게 됨
    return "prototype" + (this.first+this.second+this.third);
}
var kim = new Person("kim", 10, 20, 30);
var lee = new Person("lee", 20, 20, 50);
console.log("kim score", kim.sum());
console.log("lee score", lee.sum());
