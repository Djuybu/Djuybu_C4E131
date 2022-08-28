// let me = {
//   name: "Duy",
//   age: 18,
//   appearance: {
//     hairColor: "black",
//     weight: 60,
//     height: 165,
//   },
// };
// function getKey(object) {
//   let keys = [];
//   for (let key in object) {
//     if (typeof object[key] === "object") {getKey(object[key], keys);
//   }
//   }
//   return keys
// }

// console.log("keys:", getKey(me))
let array = [1,3,4,5,6,7,9]
array.splice (1,2,13)
console.log(array);