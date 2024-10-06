/**
 * 동기 Synchronous
 * 시간을 맞춤
 * 어떠한 것을 끝낸 후에 실행
 * 비동기 Asynchronous
 * 시간을 맞추지 않음
 * 어떠한 것을 하면서 같이 실행
 */

/**
 * js는 동기 언어
 * 비동기 코드를 작성하기 위해선 js 이외의 도움을 받아야함
 */

// 동기
console.log('1');

// 비동기
setTimeout(() => {
    console.log('2');
}, 3000);

// 동기
console.log('3');

/**
 * 위 소스 코드의 내부 진행
 * js 엔진 : 크게 메모리 힙, 호출 스택으로 구성됨
 * - 메모리 힙 : 어떠한 변수를 생성하면 여기에 저장됨
 * - 호출 스택 : 코드가 실행될 때, 즉 함수 등을 호출하면 쌓이게 됨
 * WebAPIs
 * Callback Queue
 * Event Loop
 */

function B() {
    // 비동기이기 떄문에 출력 전에 콜 스택에서 사라짐
    setTimeout(function () { // (4)
        console.log('B-1...'); // (6)
    }, 1500);
}

function A() {
    console.log('A-1...'); // (2)
    B(); // (3)
    console.log('A-2...'); // (5)
}

A(); // (1)

/**
 * 비동기 작업인 setTimeout은 WebAPI에서 처리해줌
 * setTimeout이 1.5초를 기다리면 콜백 큐로 함수가 이동함
 * 비동기 작업이 Callback Queue에 쌓이고
 * 이벤트 loop는 콜스택과 콜백큐를 모두 주시하고 있다가
 * 콜스택이 비게 되면 콜백큐에서 하나씩 꺼내서 콜스택에 넣어줌
 */