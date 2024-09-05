// var num = +prompt('istalgan soni kiriting')
// while(num == "" || isNaN(num)){
//     num = +prompt("Raqam kiriting")
// } if (num % 2 == 0 && num > 9) {
//     alert('Juft son')  
// } else if (num % 2 == 0 && num < 9){
//     alert('juft raqam')
// }else if(num % 2 !== 0 && num > 9){
//     alert('toq son')
// }else if(num % 2 !== 0 && num < 9){
//     alert('toq raqam') 
// }

var num1 =+prompt('son kiriting')
var num2 =+prompt('darajani kiriting')
while(num1 == 0 || isNaN(num1) || num2 == 0 || isNaN(num2)){
  num1 = +prompt('togri raqam kiriting')
   num2 = +prompt('togri raqam kiriting')
}   
for (let i = 1; i < num1; i++) {
 num1 *= num2
  
}