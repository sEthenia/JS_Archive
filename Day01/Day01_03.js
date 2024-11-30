// 변수

// let 키워드를 사용하여 변수를 선언함.
let message; // message라는 이름의 변수(데이터를 저장하는 저장소) 선언
message = `Hello`; // 문자열 'Hello'를 변수 message에 저장 -> 변수명을 통해 문자열 접근 가능

alert(message); //alert를 통해 message 안에 저장된 문자열을 보여줌


// 작성 방식 (1)한 줄 작성 방식
let user = `hansaem`, age = 23, bio = `I'm potato`; 

// 작성 방식 (2)개별 변수 선언
let user1 = `hansaem1`; 
let age1 = 23;
let bio1 = `I'm cat`;


// 변수 값 변경
let original;

original = `I like apple`; // 데이터 저장

original = `I like pineapple`; // 값 변경. 20번줄 저장된 데이터는 삭제.


// 변수 명명 규칙 및 예시
// 1. [문자, 숫자, $, _ ]만  사용 가능.
// 2. 첫 글자로 숫자 사용 불가
// 3. 예약어는 변수명 사용 불가
// 변수명은 대소문자를 구분함
let $ = 1;
let _ = 2;
alert($ + _); // 3

let userName;
let fontTest;


// 상수
// const를 이용하여 상수 선언
// 재할당, 변경 불가
const myBirthday = "2004.01.19"; 

// 대문자 상수
const COLOR_BLUE = `#00F`; // 암기하기 어려운 데이터를 할당하여 별칭으로 사용 가능

// 로딩 시간은, 로딩 완료 이전에 알 수 없으므로 일반적인 방식으로 명명.
// 로딩 시간은 최초 할당 후 변경되지 않으므로 상수임.
const loadTime = `/* 로딩 시 걸린 시간 */`; 


// 정리
/* --변수
    1. 데이터를 저장할 수 있는 공간. 값이 변경될 가능성이 있는 데이터를 저장할 때 사용
    2. let으로 선언하나, ES5 이하에서는 var를 사용함
    3. 블록 스코프(block scope) 특성으로, 선언된 블록 내부에서만 유효함.
 */

/*  --상수
    1. 데이터를 저장할 수 있는 공간. 한 번 할당하면 값이 변경되지 않는 데이터를 저장할 때 사용
    2. const로 선언.
    3. 선언 시 꼭 초기화 해야 함. (매번 const 입력)
    4. 재할당 불가.
*/

/* --사용법
    1. 대부분 const를 기본으로 사용
    2. 값이 변경될 가능성이 있는 경우에만 let(변수) 사용
    3. var는 새로운 프로젝트 및 코드에서는 사용하지 않아야 함
*/

//exam1
const name = "John";
let admin;
admin = name;
alert(admin);

//exam2
const planetName1 = "Earth";
const planetName2 = "Marth"