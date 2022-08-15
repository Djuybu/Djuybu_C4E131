
//let username = prompt ('Your name')
//let FamName = username.slice (0,6)
//alert(`họ của bạn: ${FamName}`)

// bắt ng dùng nhập vào số giây, in ra số giờ phút giây

let Second = parseInt(prompt ('Số giây'))
let giây = Second % 60
let second_remain = Second - giây
let minute = second_remain / 60
let phút = minute % 60
let minute_remain = minute - phút
let giờ = minute_remain /60

alert(`${giờ} gio ; ${phút} phut ; ${giây} giay `)


