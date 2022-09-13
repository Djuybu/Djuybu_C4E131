
function numberOneTriangle(starNum) {
 let star = ""
 for (let index = 0; index < Number(starNum); index++) {
  for (let j=1; j<= index; j++) {
    star += '*'
  }
  star += '\n'

 }
console.log (star)
  }
numberOneTriangle (5)