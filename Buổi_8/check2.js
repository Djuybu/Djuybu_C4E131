let a = prompt ('Điền a')
let b = prompt ('Điền b')
let c = prompt ('Điền c')
let x1
let x2

let delta = b**2 -(4*a*c)
if (delta < 0) {
    alert ('Phương trình vô nghiệm')
} else if (delta == 0) {
    alert('x1=x2='+ ((-b)/(2*a)));
} else {
    x1= (-b + Math.sqrt(delta))/2*a
    x2 = (-b- Math.sqrt(delta))/2*a
    alert('x1='+ x1+ ' '+'x2='+ x2)
}