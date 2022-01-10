// super : 부모클래스가 일을 하면서 부모가 못 하는 일을 자식이 하게끔 하는 것
// 예를들어 부모는 frist, second 까지만 입력받고 자식은 third 까지 입력받고 싶을때 사용한다는말임
class Person{
    constructor(name, first, second){
        this.name = name;
        this.first = first;
        this.second = second;
        console.log("constructor");
    }
    sum(){
        return this.first + this.second;
    }
}
class PersonPlus extends Person{
    constructor(name, first, second, third){
        super(name, first, second);
        this.third = third;
    }

    sum(){ // 부모클래스의 sum을 호출하여 여기에 더함
        return super.sum() + this.third;
    }
    avg(){
        return (this.first + this.second + this.third)/3;
    }
}

var kim = new PersonPlus("Kim", 10, 20, 30);
console.log("Kim_sum : ", kim.sum());
console.log("Kim_avg : ", kim.avg());