class Person{
    constructor(name, first, second){
        this.name = name;
        this.first = first;
        this.second = second;
        console.log('constructor');
    }
    
    sum(){
        return this.first + this.second;
    }
    // 특정 메소드 추가(avg:평균 메소드)
    avg(){
        return (this.first + this.second)/2;
    }
}
var kim = new Person("kim", 10, 40);
console.log("avg : ", kim.avg());