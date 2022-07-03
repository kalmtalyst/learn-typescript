// String type
var familyName = 'Kim';
// familyName = 123; 숫자 할당 불가
// Array type
var names = ['Kim', 'Hwang'];
var paul = [123, true];
// Object type
var myName = { name: 'Kim' };
var john = { name: 'Lee' };
var tom = {
    name: 'Park'
};
// Union type : 다양한 타입이 들어올 수 있게 하자
var herName = 123;
var members = [1, '2', 3];
// let members :number | string[] = [1,2,3] 또는 ['kim']
var object = { a: '123' };
var num = 123;
// 함수에 타입지정 가능
// 아래 함수는 파라미터로 number, return 값으로 number
function learnTS(x) {
    return x * 2;
}
