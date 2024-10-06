/**
 * this
 * 메소드(객체안에 있는 함수)에서 this 사용 => 해당 객체를 가리킴(참조)
 * 함수에서 this 사용 => window 객체를 가리킴
 * constructor 함수에서 this 사용 => 빈 객체를 가리킴
 */

// Method => Object
const audio = {
  title: "a",
  play() {
    console.log("play this", this);
  },
};

audio.play();

// play와 같이 메소드
audio.stop = function () {
  console.log("stop this", this);
};

audio.stop();

// Function => window object
function playAudio() {
  console.log("play this", this);
}
playAudio();

// Constructor Function => {} (필드가 없는 경우) 만약 필드가 있다면 필드가 담긴 객체
function Audio(title) {
  this.title = title;
  console.log(this);
}

const audio_con = new Audio("b");

// 화살표 함수 this => 항상 상위 scope의 this
// Lexical this
const my_audio = {
  title: "audio",
  categories: ["rock", "pop", "hiphop"],
  displayCategories() {
    // 여기서 this는 이 객체를 가리킴
    this.categories.forEach((category) => {
      // 이 this는 상위 스코프에 있는 this를 가리킴. 즉, 이 객체
      console.log(`title: ${this.title} category: ${category}`);
    });
  },
};

/**
 * forEach의 두번째 매개변수 => thisArg
 * 콜백 함수에서 this로 참조할 수 있게 됨
 */

my_audio.displayCategories();

const my_audio2 = {
  title: "audio",
  categories: ["rock", "pop", "hiphop"],
  displayCategories() {
    // 여기서 this는 이 객체를 가리킴
    this.categories.forEach(
      function (category) {
        // 이 this는 함수안에 있기 때문에 window를 가리킴
        console.log(`title: ${this.title} category: ${category}`);
      },
      { title: "audio" } // 이 부분을 작성하게 되면 this가 이 object를 가리킴
      //   this // 여기에 this를 작성하게 되면 이 this는 메소드 안에 있는 것이 됨 따라서 이 객체를 참조함
    );
  },
};

// my_audio2.displayCategories();
