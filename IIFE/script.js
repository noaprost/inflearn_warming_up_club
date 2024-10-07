(function () {
  var aName = "Barry";
})();

// console.log(aName); // error aName is not defined

let result = (function () {
  var name = "Barry";
  return name;
})();

console.log(result); // 함수가 호출되어 바로 실행
