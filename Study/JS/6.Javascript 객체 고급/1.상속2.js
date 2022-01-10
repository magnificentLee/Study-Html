class Person2{ // 굳이 여기서 안 만들고 1.상속.js 파일에 만들어져 있으니 그대로(만들지 않고 생성자로) 가져와도 됨, 
    // 다만 중복해서 만들면 에러가 발생하기 때문에 이름을 Person2로 변경한것임을 유의할것
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
// 다른 사람의 코드에서 메소드를 추가하고 싶지만 수정할 수 없거나 전체 코드를 수정하기 부담스러운 경우
// 새로운 클래스를 만들어서 넣어주면 됨 -> 상속3 참고
class Person2Plus{
    constructor(name, first, second){
        this.name = name;
        this.first = first;
        this.second = second;
        console.log("constructor");
    }

    sum(){
        return this.first + this.second;
    }

    avg(){
        return (this.first + this.second)/2;
    }
}
var kim = new Person2Plus("kim", 10, 20);
console.log("kim_sum : ", kim.sum());
console.log("kim_avg : ", kim.avg());