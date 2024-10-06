/**
 * 함수에서 this는 window
 * 하지만 다른 객체를 참조하고 싶다면? 이럴때 사용할 수 있는 것이
 * bind, call, apply
 */

/**
 * call method
 * 함수를 호출하는 함수
 * 첫번째 매개변수로 어떠한 것을 전달해주면 호출되는 함수의 this안에 전달받은 것을 넣어줌
 */

const fullName1 = function () {
  console.log(this.firstName + " " + this.lastName);
};

const person1 = {
  firstName: "John",
  lastName: "Doe",
};

// This will return "John Doe"
fullName1.call(person1);

// Call() with arguments
const fullName2 = function (city, country) {
  console.log(`${this.firstName}, ${this.lastName}, ${city}, ${country}`);
};

const person2 = {
  firstName: "John",
  lastName: "Doe",
};

fullName2.call(person2, "Oslo", "Norway"); // 다른 인수도 넣어줄 수 있음

/**
 * apply method
 * call과 거의 동일, 인수를 넣을 때 배열로 넣어줌
 */

// Apply() with arguments
const fullName3 = function (city, country) {
  console.log(`${this.firstName}, ${this.lastName}, ${city}, ${country}`);
};

const person3 = {
  firstName: "John",
  lastName: "Doe",
};

fullName3.apply(person3, ["Oslo", "Norway"]);


/**
 * bind method
 * 객체를 this에 바인딩 시켜줌
 * call, apply와 다르게 호출이 자동으로 되지 않기 때문에 직접 호출해줘야함
 */

function func(language) {
    if (language === "kor") {
        console.log(`language: ${this.korGreeting}`);
    } else {
        console.log(`language: ${this.engGreeting}`);
    }
}

const greeting = {
    korGreeting: "안녕 ",
    engGreeting: "Hello ",
};

const boundFunc = func.bind(greeting);
boundFunc('kor');