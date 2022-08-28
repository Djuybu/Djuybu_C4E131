// console.log(a);
// var a = 1;
// console.log(`second ${a}`);

// saySth("bbb");
// function saySth() {
//   console.log(a);
//   var a = 123;
// }
let me = {
  name: "NotM3",
  age: "unknown",
  birthday: "18/05/1980",
};
console.log(me["birthday"]); // chạy, cách kia k chạy

let student = {
  firstName: "John",
  age: 18,
  bag: {
    book: ["a", "b", "c"],
    price: 50,
  },
  greeting: function greeting(params) {
    console.log('Hello');
  }
};
student.sayGoodbye = function goodbye(params) {
    console.log('Goodbye');
}
console.log(student);
let Keylist = Object.keys(student)
console.log(Keylist);