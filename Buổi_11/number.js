 function addNum() {
     newNum = parseInt(document.getElementById ("currentNum").innerHTML);
     document.getElementById ("currentNum").innerHTML = newNum + 1;
 }
numChange.onclick = addNum
