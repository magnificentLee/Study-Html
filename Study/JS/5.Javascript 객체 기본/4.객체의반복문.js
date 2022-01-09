var memberArray = ['egoing', 'graphittie', 'leezche'];
console.group('array loop');  // 그룹핑 시작
var i = 0;
while (i < memberArray.length){
    console.log(memberArray[i]);
    i++;
}
console.groupEnd('array loop');  // 그룹핑 종료, 출력시 그룹화된채 출력됨

var memberObject = {
    manager:'egoing',
    developer:'graphittie',
    designer:'leezche'
}
console.group('object loop');
for(var name in memberObject){
    console.log(name, memberObject[name]);
}
console.groupEnd('object loop');