// typeof -> 인수의 자료형 반환.
//           - 자료형에 따른 처리방식을 다르게 하고 싶을 떄
//           - 변수의 자료형을 알아내고 싶을 때 사용
// 연산자임. 표기는 괄호 유무 상관 없음. typeof x (x)
// 호출시 인수의 자료형을 나타내는 문자열 반환
typeof undefined // undefined
typeof 0 // number
typeof 10n // bigint
typeof true // boolean
typeof "hansaem" // string
typeof Symbol("id"); // symbol

// 1. Math -> 수학 연산을 제공하는 내장 객체
typeof Math // object

// 2. null은 객체가 아니나 하위호환성을 위해 오류 수정x
typeof null // object

// 3. typeof는 피연산자가 함수면 function 반환.
// 자료형에 '함수형'은 존재하지 않으나 하위 호환성 유지를 위해 수정 x
typeof alert // fuction

// Exam
// 해당 스크립트의 결과 작성
let name = "Ilya"; 

alert( `hello ${1}` ); // hello 1

alert( `hello ${"name"}` ); // hello name

alert( `hello ${name}` ); // hello Ilya


