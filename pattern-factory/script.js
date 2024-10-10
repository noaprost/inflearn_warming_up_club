// const book1 = {
//     title: 'Harry Potter',
//     author: 'JK Rowling',
//     isbn: 'AB123',
// };

// const book2 = {
//     title: 'The Great Gatsby',
//     author: 'F. Scott Fitzgerald',
//     isbn: 'CD456',
// };

// const book3 = {
//     title: 'Moby-Dick',
//     author: 'Herman Melville',
//     isbn: 'EF789',
// };

// 위와 같은 코드는 속성을 하나 변경할 때 모든 객체를 변경해줘야하지만
// 아래 코드는 함수 내용만 변경해줘도 됨

const createBook = (title, author, isbn) => ({
  title,
  author,
  isbn,
});

const book1 = createBook("Harry Potter", "JK Rowling", "AB123");

const book2 = createBook("The Great Gatsby", "F. Scott Fitzgerald", "CD456");

const book3 = createBook("Moby-Dick", "Herman Melville", "EF789");
