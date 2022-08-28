let day = parseInt(prompt("ngày"));
let month = parseInt(prompt("tháng"));
let year = parseInt(prompt("năm"));
function leapYear_check() {
  if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
    return true;
  } else {
    return false;
  }
}

function month_31() {
  if (day == 31) {
    month = month + 1;
    day = 1;
  } else if (day < 31 && day > 0) {
    day = day + 1;
  } else {
    alert("Error");
  }
}
function month_30() {
  if (day == 30) {
    month = month + 1;
    day = 1;
  } else if (day < 30 && day > 0) {
    day = day + 1;
  } else {
    alert("Error");
  }
}
function month_2 () {
    if (!leapYear_check()) {
        if (day == 28) {
          month = month + 1;
          day = 1;
        } else if (day < 28 && day > 0) {
          day = day + 1;
        } else {
          alert("Error");
        }
      } else{ 
      if (day == 29) {
        month = month + 1;
        day = 1;
      } else if (day < 29 && day > 0) {
        day = day + 1;
      } else {
        alert("Error");
      } }
}
function month_12 () {
    if (day == 31) {
        year = year + 1;
        month = 1;
        day = 1;
      } else if (day) {
        day = day + 1;
      }
}
if (month == 1 || month==3 || month==5 || month==7 || month==8 || month==10) {
    console.log('alo 31')
  month_31();
}else if (month == 4 || month==6|| month==9 || month==11) {
    console.log('ua alo')
  month_30();
}else if (month == 2) {
  month_2 ()
} else if (month == 12) {
  month_12 ()
} else {
    alert('Error')
}