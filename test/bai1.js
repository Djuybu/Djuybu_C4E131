let a =parseInt( prompt('Nhap A'));
let b = parseInt(prompt ('Nhap B'));

function primeCheck() {
    for (let i = a; i <= b; i++){
        let count = 0;
        for(let j = 2; j <=i; j++){
            if(i % j ==0){
                count+=1;
            }
        }
        if(count <=1){
            document.write(i);
        }
    }
}

primeCheck();