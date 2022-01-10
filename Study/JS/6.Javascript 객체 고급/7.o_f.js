// 1. call 함수

var kim = {name:"kim", first:10, second:20}
var lee = {name:"lee", first:10, second:10}
function sum(){
    return this.first + this.second;
}
// call : 실행, sum.call(); == sum();
console.log("call_kim_sum : ", sum.call(kim));
// sum.call(kim) == function sum()에서 this = kim
console.log("call_lee_sum : ", sum.call(lee));


// prefix라는 parameter(매개변수)가 존재하는경우
function sum2(prefix){
    return prefix + (this.first + this.second);
}
console.log("call_kim_sum2 : ", sum2.call(kim, "=>"));
console.log("call_lee_sum2 : ", sum2.call(lee, "=>"));


// 2. bind 함수
// parameter 지정도 가능함
// sum2 함수가 아래의 값이 입력된채 새로 만들어 return 되는 것, 기존의 sum2에 영향을 주지 않음
var kimSum2 = sum2.bind(kim, "=>");
console.log("kim_sum2 : ", kimSum2());

// call 과 bind 의 차이점
// call : 실행할때마다 this의 값을 바꿈
// bind : 어떤 함수에 this의 값을 영구적으로 바꾸는 새로운 함수를 만들어줌