var kim = {
    name:"kim",
    first:10,
    second:20,
    sum:function(f,s){
        return f+s;
    }
}
console.log("kim.sum(kim.first, kim.second)", kim.sum(kim.first, kim.second));
// 내부의 값을 이용할 경우 굳이 한번 더 언급할 필요 없이 this를 사용하면 됨
// this : 메소드의 객체를 가리키는 키워드
// 메소드 : 함수가 객체에 저장되어 있을 때 부르는 말
// 아래는 예시
var kims = {
    name:"kims",
    first:20,
    second:30,
    sum:function(){
        return this.first+this.second;
    }
}
console.log("kims.sum()", kims.sum());