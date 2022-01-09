// 객체가 아닌 배열임
var memberArray = ['egoing', 'graphittie', 'leezche'];
// 배열에서는 값에 접근할 때 []를 사용합니다.
console.log("memberArray[2]", memberArray[2]);

// 목록만 있으면 되는 경우에는 배열을 쓰면 되지만
// 각각의 데이터가 어떤 데이터인지를 풍부하게 설명해야하는 경우 객체를 사용함
// 1. 객체의 생성
var memberObject = {
    manager:'egoing',
    developer:'graphittie',
    designer:'leezche'
}
// 객체에서는 값에 접근할 때 .를 사용함
memberObject.designer = 'leezche';
console.log('memberObject.designer', memberObject.designer);
// []를 이용해 접근할 수도 있음
console.log("memberObject.['designer']", memberObject['designer']);

// 2. 객체의 수정
memberObject.designer = 'leezhe';
console.log("memberObject.designer", memberObject.designer);

// 3. 객체의 삭제
delete memberObject.manager
console.log("after delete memberObject.manager", memberObject.manager);