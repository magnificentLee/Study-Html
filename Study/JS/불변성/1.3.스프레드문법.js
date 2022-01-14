// 객체의 불변성을 유지하는 방법
// 스프레드 문법을 사용하여 객체를 복사하는 것
// 단, 스프레드 문법은 1레벨 깊이에서만 유효하게 동작하기 때문에 객체 내부의 객체의 불변성까지 유지할 수 없음

var coke = {
    name: "coca",
    price: 2980
}

var new_coke = {...coke};
coke.name = "pepsi"
console.log(coke.name, new_coke.name);
// pepsi, coca : 불변성이 유지된 것을 알 수 있음
