// for
for (let i = 0; i < 10; i++) {
  if (i === 3) {
    console.log("3!");
    continue;
  }

  if (i === 5) {
    console.log("5!");
    break;
  }

  console.log(`Number ${i}!`);
}

// for ... in / for ... of
// 객체의 속성을 출력하고 싶을 때 사용
const user = {
  name: "Han",
  province: "경기도",
  city: "성남",
};
for (let x in user) {
  console.log(x, user[x]);
}

// while
let i = 0;
while (i < 3) {
  console.log(i);
  i++;
}

// do while
let j = 100;
do {
  console.log(j);
  j++;
} while (j < 3);

const fruit = ["🍎", "🍌", "🍇"];

// 배열의 원소에 하나씩 접근할 때 사용
// for...of
for (let x of fruit) {
  console.log(x);
}

// forEach
fruit.forEach((item) => console.log(item));

// map
fruit.map((item) => console.log(item));

/**
 * for vs forEach
 * forEach는 break, continue를 사용하지는 못함
 * for은 await과 함께 작동하지만 forEach는 완젹하게 동작하지는 않음
 * 성능은 for이 forEach보다 빠름
 * 가독성과 성능 사이에서 적절한 것을 선택하는 것이 좋음
 */
