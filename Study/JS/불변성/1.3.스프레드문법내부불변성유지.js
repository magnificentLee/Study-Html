// 레벨2 객체까지 불변성을 유지해주려면 별도의 변수에 값을 재할당하고 넣어주는 번거로운 과정을 거쳐야함
const coka = {
    name: "coca",
    fake: {
        name: "pepsi"
    }
}
const new_fake = {...coka.fake};
const new_coka = {...coka};
new_coka.fake = new_fake;
coka.fake.name = "coca zero";
console.log(coka.fake.name, new_coka.fake.name);
// coca zero, pepsi : 불변성이 유지된 결과