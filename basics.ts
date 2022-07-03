// String type
let familyName :string = 'Kim';
// familyName = 123; 숫자 할당 불가


// Array type
let names :string[] = ['Kim', 'Hwang'];
// array에 사용 가능한 tuple type
type Member = [number, boolean];

let paul:Member = [123, true];


// Object type
let myName :{ name? : string} = { name: 'Kim' };

type Members = {
  name: string,
}
let john : Members = { name: 'Lee'}

// 모든 object 속성
type People = {
  [key :string] : string, // 글자로 된 모든 object 속성의 타입은 :string
}
let tom :People = {
  name: 'Park'
}

// Union type : 다양한 타입이 들어올 수 있게 하자
let herName :string | number = 123;
let members :(number | string)[] = [1,'2',3];
// let members :number | string[] = [1,2,3] 또는 ['kim']
let object :{a :string | number } = { a : '123' };

// Type alias : 타입은 변수에 담아 사용 가능(통상 타입명은 대문자로 시작)
type NameType = string | number;

let num :NameType = 123;

// 함수에 타입지정 가능
// 아래 함수는 파라미터로 number, return 값으로 number
function learnTS(x :number) :number {
  return x * 2;
}

