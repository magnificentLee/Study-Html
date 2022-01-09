console.log("Math.PI", Math.PI);
console.log("Math.random()", Math.random());  // 함수, 객체에 소속되면 메소드
console.log("Math.floor(3.9)", Math.floor(3.9));

// 객체 만들어보기
var MyMath = {
    PI:Math.PI,
    random:function(){
        return Math.random();
    },
    floor:function(val){
        return Math.floor(val);
    }
}
// 직접 만든 개체 사용해보기
console.log("MyMath.PI", MyMath.PI);
console.log("MyMath.random()", MyMath.random());
console.log("MyMath.floor(3.9)", MyMath.floor(3.9));

var MyMath_PI = Math.PI;
function MyMath_random(){
    return Math.random();
}
function MyMath_floor(val){
    return Math.floor(val);
}
console.log("MyMath_PI", MyMath_PI);
console.log("MyMath_random()", MyMath_random());
console.log("MyMath_floor(3.9)", MyMath_floor(3.9));
