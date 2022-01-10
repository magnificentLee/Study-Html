kim = {
    name:"kim",
    first:10,
    second:20,
    sum:function(){
        return this.first + this.second;
    }
}

// lee = {
//     name:"lee",
//     first:10,
//     second:10,
//     avg:function(){
//         return (this.first + this.second)/2;
//     }
// }
// sum을 또 정의하기 싫기 때문에 proto를 이용해 상속
// lee.__proto__ = kim;
// 상속했기 때문에 lee라는 객체에 sum 메소드가 없어도 작동한다
// console.log("lee_sum : ", lee.sum());
// kim은 가지지 않은 avg 메소드를 따로 가질 수도 있음
// console.log("lee_avg : ", lee.avg());

// __proto__ 보다 나은 Object.create를 이용하면

var lee = Object.create(kim);
lee.name = "lee";
lee.first = 10;
lee.second = 10;
lee.avg = function(){
    return (this.first + this.second)/2;
}

// __proto__ 를 사용하지 않아도 객체kim의 메소드sum이 잘 작동함
console.log("lee_sum : ", lee.sum());
// kim에게 없는 메소드 avg도 잘 작동함
console.log("lee_avg : ", lee.avg());