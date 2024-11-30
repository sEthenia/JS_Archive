

// no error
let message = "Hello";
message = 20020511;

//number type
let n = 123; // 정수
n = 12.345; // 부동소수점 숫지

alert( 1 / 0 ); // 무한대
alert( Infinity ) // 무한대

// NaN을 반환하며 연산 종료
alert( "hansaem" / 2 ); // NaN, 문자열을 숫자로 나누면 에러 발생
alert( "hansaem" / 2 + 5 ); // NaN

// BigInt : 길이에 관계 없이 정수 표현 가능, 정수 리터럴 끝에 'n'을 붙여 표기

// string : 따옴표로 묶음.
let str = "hansaem";
let str1 = 'single quotes are no problem too';
let phrase = `can embed another ${str}`;

//exam
let name = "hansaem";
alert(`${name} is a cat`); // hansaem is a cat
alert(`the result is ${ 1 + 2}` ); // the result is 3
// 이처럼 문자열 일부에 포함 가능
// 백틱 사용 시에만 ${} 사용 가능
// 별다른 글자형 지원하지 않음

//boolean type
let nameFieldCheck = true;
let ageFieldCheck = false;

//값 저장 시에도 이용됨
let isGreater = 4 > 1;
alert( isGreater ); // true

// null
// 어떠한 자료형에도 속하지 않는 값임
let age1 = null; // 나이를 알 수 없거나 값이 비었음을 뜻함

// undefined
// 어떠한 자료형에도 속하지 않는 값임.
// 변수 선언은 하였으나, 값이 할당되지 않은 상태를 나타낼 때 사용.
let age2;
alert(age); // undefined 출력

// 값을 undefined로 재할당 가능
let age3 = 23;
age = undefined;
alert(age); // undefined 출력. 비권장 (null 사용)









