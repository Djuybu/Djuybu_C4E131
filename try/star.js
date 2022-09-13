function starGen(params) {
    box = document.querySelector ('#starHolder')
    starNum = parseInt (document.getElementById('starNum').value)
    for (let index = 1; index <= starNum; index++) {
    starBox=document.createElement('starBox')
    starBox.type = 'div'
    starBox.innerHTML ='<img src ="686384.png">'
    box.appendChild (starBox)
    }
    console.log(starNum);
}
