// console.log(userName);
function submitForm(params) {
    // 
  checkName = document.querySelector("#userName").value.length;
  console.log(checkName);
  checkPasswordLength = document.querySelector("#password").value.length;
  console.log(checkPasswordLength );
//   check tên & mật khẩu
  if (checkName === 0) {
    document.querySelector('.alert').innerHTML = 'Bạn chưa nhập tên tài khoản'
  } 
else if (checkName !==0 && checkPasswordLength === 0) {
    document.querySelector('.alert').innerHTML = 'Bạn chưa nhập mật khẩu'
  } else if (checkPasswordLength < 8) {
    document.querySelector('.alert').innerHTML = 'Mật khẩu phải có 8 kí tự trở lên'
  } else {
    alert ('Chào mừng')
  }
}
function unhide () {
    inputType = document.getElementById ('password')
    if (inputType.type === 'password') {
       inputType.type = "text"
    } else {
        inputType.type = "password"
    }
}
