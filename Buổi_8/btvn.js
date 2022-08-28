// bài 1
// const operator = prompt("Enter operator (either +,-, * or / )");
// let a = parseInt(prompt("a="));
// let b = parseInt(prompt("b="));
// switch (operator) {
//   case "+":
//     result = a + b;
//     alert("kết quả:" + result);
//     break;
//   case "-":
//     result = alert("kết quả:" + (a - b));
//     break;
//   case "*":
//     result = alert("Kết quả" + a * b);
//     break;
//   case "/":
//     result = alert("kết quả" + a / b);
//     break;
//   default:
//     alert("Lỗi");
//     break;
// }
//bài 2
a=0
const number = parseInt(prompt('Enter a positive number, not zero plz'))
for (let index = 1; index <= number; index++) {
    divided = number % index
    console.log(divided);
    if (divided == 0) {
        a++
    } else {
        continue;
    } 
    console.log(a);
}
if (a==2) {
    alert ('Đây là số nguyên tố')
} else {
    alert ('Đây không là số nguyên tố')
}