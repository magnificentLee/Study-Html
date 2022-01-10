class Person3{ // 굳이 여기서 안 만들고 1.상속.js 파일에 만들어져 있으니 그대로(만들지 않고 생성자로) 가져와도 됨, 
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
// 새로운 클래스를 만들어서 넣어주면 됨 -> 상속3
// 다만 생성자 함수(constructor 함수), sum() 지점에서 중복된다.
// 클래스의 중복 제거 : 상속
// 상속을 이용해 중복을 제거해보자
class Person3Plus extends Person3{ // person3이 person3Plus에 상속됨
    avg(){
        return (this.first + this.second)/2;
    }
}
var kim = new Person3Plus("kim", 10, 20);
console.log("kim_sum : ", kim.sum());
console.log("kim_avg : ", kim.avg());

// 실행해보면 이전과 동일한 결과가 나오는것을 알 수 있음