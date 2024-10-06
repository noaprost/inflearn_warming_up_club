/**
 * Browser Object Model (BOM)
 * window.location
 * window.navigator
 * 등등
 * Document Object Model (DOM)
 * window.document
 */

/**
 * DOM
 * html 분석 -> dom tree 생성
 * 메모리에 웹 페이지 문서 구조를 트리 구조로 표현해서 웹 브라우저가 HTML 페이지를 인식하도록 함
 * 요소들을 자바스크립트가 이용할 수 있게끔 트리 구조로 만든 객체 모델
 * DOM에서 요소들을 조작할 수 있는 api를 제공 -> 이를 js를 통해 조작할 수 있게됨
 */

/**
 * 웹 페이지 필드 과정 (Critical Rendering Path - CRP)
 * html 분석 -> dom tree 생성 -> css dom tree 생성 -> 합쳐서 렌더링 트리 생성
 * -> 레이아웃 단계 : 배치할 요소의 위치와 크기를 계산 -> Paint : 실제로 그려짐
 * 렌더링 트리 생성, 위치 계산과 그리는 단계의 비용이 큼
 * 리액트는 이러한 부분의 성능을 개선하기 위해 virtual DOM을 이용함
 */