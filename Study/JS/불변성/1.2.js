var coke = {
    name: "coca",
    price: 2980
}
var new_coke = coke;
coke.name = "pepsi";
console.log(coke.name, new_coke.name);
// coca, pepsi 가 아닌 pepsi pepsi가 나옴
// 객체의 변화가 그객체를 참조하던 다른 객체에 영향을 준 것
