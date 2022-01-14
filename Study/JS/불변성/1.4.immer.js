// 복잡한 과정없이 불변성을 유지하는 방법
// immer 라이브러리를 사용하기
import produce from 'immer';
const coke = {
    name: 'coca',
    fake: {
        name: 'pepsi',
    }
}

const new_coke = produce(coke, (draft) => {
    draft.name = 'pepsi';
    draft.fake.name = 'coca';
});
console.log(coke.name,coke.fake.name);
console.log(new_coke.name,new_coke.fake.name);
// immer가 제대로 설치되지 않아 에러가 발생할것임
//"coca" "pepsi"
//"pepsi" "coca"
