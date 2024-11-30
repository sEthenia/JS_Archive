// alert
// print "modal window"
alert("Hello");

// prompt
// 브라우저에서 제공하는 prompt 함수는 두 개의 인수를 받음.
result = prompt(tilte, ["값을 입력하세요."]);
// title : 사용자에게 보여줄 문자열
// [default] : 입력 필드의 초기값 *[]는 매개변수가 선택값이라는 것을 의미
// 사용자가 입력 필드에 기재한 문자열을 반환. 사용자가 입력을 취소한 경우 -> null 반환

let test = prompt("test");

let test2 = prompt("test", ''); // IE 사용자를 위한 매개변수 처리
// 두번째 매개변수를 명시적으로 처리 시, 오래된 브라우저에서 안정적 일관적 동작이 보장됨.
// 
