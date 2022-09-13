function numberOneTriangle() {
  let result = "";
  placeHolder = document.querySelector(".trianglePlace");
  triNumber = parseInt(document.querySelector(".triangleNum").value);
  // if (triNumber > 1 && triNumber < 10 ) {
  for (let index = 1; index <= triNumber; index++) {
    for (let j = 1; j <= index; j++) {
      result += "*";
    }
    result += "\n";
    // } else {
    //     alert ('vi phạm điều kiện')
    // }
    console.log(result);
    placeHolder.appendChild (result)
  }
}
  // triAngle = document.createElement('triAngle')
            // triAngle.type = 'div' 
            // triAngle.innerHTML = '<img src ="triangle.png">'
            // triAngle.style = 'icon'
            // placeHolder.appendChild (triAngle)
            // }
            // placeHolder.writeIn ("</br>")
