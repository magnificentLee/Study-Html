class People {
    constructor(name, first, second){
        this.name = name;
        this.first = first;
        this.second = second;
        console.log("constructor");  // 가장 먼저 실행됨
    }
}

var kim = new People("kim", 10, 20);
console.log("kim", kim)
