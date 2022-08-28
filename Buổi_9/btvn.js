// // Bài 1
let myAge = prompt ('Nhập tuổi của bạn')
while (myAge >= 18 ) { alert ('Xin chào')} confirm ('Did your parents allow you?')
// // Bài 2
let a = parseInt(prompt('a'))
let b = parseInt(prompt('b'))
if ((a-b)< 0 ){
    alert ('a is min')
}else if (a=b){
    alert('a=b')
}else {
    alert ('b is min')
}
// // Bài 3

//Bài 4
let userName= prompt ('Nhập tên người dùng')
switch (userName) {
    case 'Admin':
        password = prompt ('Nhập mật khẩu') 
        // console.log('Ủa alo');
        switch (password) {
            case 'Mindx':
                alert("Chào mừng")
                break;
            case null:
                alert('Bạn đã huỷ')
            default:
                alert('Mật khẩu sai')
                break;
        }
        break;
    default:
        alert ('tôi không biết bạn')
        break;
    case null:
        break;
}