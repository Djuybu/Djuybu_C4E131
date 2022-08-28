
let condition = true;
while(condition) {
    let flag = parseInt(prompt('Nhap 1 de chay chuong trinh \n nhap 2 de thoat chuong trinh'))
    switch (flag) {
        case 1:
            console.log('chuong trinh cua minh')
            break;
    
        case 2:
            
            condition = false
            break;
    }
}
