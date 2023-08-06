// // שאלה 1
// const exercise1 = prompt("enter a number")
// Number(exercise1)
// if (exercise1 > 10) {
//     alert('bigger')
// }
// // שאלה 2
// const exercise2Num1 = prompt("enter a number")
// const exercise2Num2 = prompt("enter a number")
// Number(exercise2Num1)
// Number(exercise2Num2)
// if (exercise2Num1 > exercise2Num2) {
//     alert(exercise2Num1)
// } else if (exercise2Num2 > exercise2Num1) {
//     alert(exercise2Num2)
// } else {
//     alert('equal')
// }
// // שאלה 3
// const exercise3str = prompt('enter a str')
// let len = exercise3str.length
// if (len > 20) {
//     alert('ענק')
// } else if (len > 10) {
//     alert('גדול')
// } else {
//     alert('קטן')
// }
// // שאלה 4
// const exercise4str = prompt('enter a str')
// let len2 = exercise4str.length
// if (len2 > 20) {
//     alert(exercise4str.substring(0, 20))
// } else if (len2 < 20) {
//     alert(len2)
// }
// // שאלה 5
// const exercise5 = prompt("enter a number")
// switch (+exercise5) {
//     case 1:
//         alert('ראשון')
//         break
//     case 2:
//         alert('שני')
//         break
//     case 3:
//         alert('שלישי')
//         break
//     case 4:
//         alert('רביעי')
//         break
//     case 5:
//         alert('חמישי')
//         break
//     case 6:
//         alert('שישי')
//         break
//     case 7:
//         alert('שבת')
//         break
//     default:
//         alert('חורג מ 1 עד 7')
// }



const exercise3str = prompt('enter a str')
if (exercise3str.length > 20) {
    alert('ענק')
} else if (exercise3str.length > 10) {
    alert('גדול')
} else {
    alert('קטן')
}