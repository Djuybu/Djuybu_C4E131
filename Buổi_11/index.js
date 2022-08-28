// let secondChild = document.querySelectorAll('.child')
// console.log(firstChild);
    // let secondChild = document.getElementById ('secondChild')
    // secondChild.innerHTML = 'lmaokai'
// 
const todoList = ['Homework','Shopping','Sleep']
let ul = document.createElement ('ul') // tạo ul
for (let index = 0; index < todoList.length; index++) {
   let li = document.createElement ('li') // tạo li
   li.innerHTML =todoList [index] // nhét value vào
   ul.appendChild(li)    // nhét li vào ul 
}
document.body.appendChild (ul)

//button
let button = document.createElement ('button')
button.type = 'button'
button.innerHTML = 'Like'
button.id ='butt1'
document.body.appendChild (button)
function click_check() {
    if (butt1.innerHTML === 'Liked') {
        butt1.style='Background-color: blue; color: white '
        butt1.innerHTML = 'Like'
    } else if (butt1.innerHTML === 'Like'){
        butt1.style ='background-color: black    ; color: white'
        butt1.innerHTML = 'Liked'
    }
    return false;
}
butt1.onclick = click_check