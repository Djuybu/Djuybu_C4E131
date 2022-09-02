// delete
const list = document.querySelector("ul");
list.addEventListener("list", function(event){
    if(event.target.className === 'delete'){
        const ls = event.target.parentElement;
        ls.removeChild(li);
    }
});
