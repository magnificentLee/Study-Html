// 스프레드 문법은 1레벨 깊이에서만 유효, 객체 내부의 객체의 불변성까지 유지할 수 없음
var coke = {
    name: "coca",
    fake: {
        name: "pepsi"
    }
}
var new_coke = {...coke};
coke.fake.name = "coca zero";
console.log(coke.fake.name, new_coke.fake.name);
// coca zero, coca zero : 내부의 불변성은 유지하지 못한 것을 알 수 있음
