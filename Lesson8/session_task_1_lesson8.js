//Bài 1:
// const a = 10;
// const b = 15;
// console.log(`Bài tập 1 A: ${a > b}`);
// console.log(`Bài tập 1 B: ${a == 10}`);
// console.log(`Bài tập 1C: ${a}`);

// const x = 5;
// const y = 6;
// console.log(`Bài tập 1D: ${x !==y}`);

//Bài 2:
//2a:
// var a = 10;
// var b = Number(a);
// var c = a*1;
// console.log(a);
// console.log(b);
// console.log(c);

//2b:
// var a = 10;
// var b = '';
// if(a){
//     console.log(`a đúng`); //=>true
// }
// if(b){
//     console.log(`b đúng`);
// }

//Bài 3:
// //3a:
// let a = "mindX";
// let b = "";
// if(a || b){
//     console.log(`a đúng`); //=>true
// }
// if(b != a){
//     console.log(`b đúng`);
// }

//3b:
// let a = "mindX";
// let b = "";
// if(a && true && !b){
//     console.log(`a đúng`); //=>true
// }
// if(b != a){
//     console.log(`b đúng`);
// }

//3c:
// let a = -1;
// let b = 1;
// console.log(`Điều kiện ta cần là: ${a < 1 && b < 2}`);

//3d:
// let num = parseInt(prompt("Nhập vào số cần tính:"));
// num = parseInt(num);
// if(num % 3==0){
//     console.log(`Số bạn vừa nhập chia hết cho 3`);
// }
// else{
//     console.log(`Số bạn vừa nhập không chia hết cho 3`);
// };

//Bài tập về nhà
//Bài 1:
//Cách 1:
// function cong(a, b) {
//   return a + b;
// }
// function tru(a, b) {
//   return a - b;
// }
// function nhan(a, b) {
//   return a * b;
// }
// function chia(a, b) {
//   return a / b;
// }
// const a = parseFloat(prompt("Nhập số A cần tính: "));
// const b = parseFloat(prompt("Nhập số B cần tính: "));
// const c = prompt("Biểu thức cần tính:");
// switch (c) {
//   case "+": {
//     console.log("Kết quả tính được:" + cong(a, b));
//     break;
//   }
//   case "-": {
//     console.log("Kết quả tính được:" + tru(a, b));
//     break;
//   }
//   case "*": {
//     console.log("Kết quả tính được:" + nhan(a, b));
//     break;
//   }
//   case "/": {
//     console.log("Kết quả tính được:" + chia(a, b));
//     break;
//   }
// }

// Cách 2:
// const a = parseFloat(prompt("Nhập số A cần tính: "));
// const b = parseFloat(prompt("Nhập số B cần tính: "));
// const c = prompt("Biểu thức cần tính:");
// let cong = a+b;
// let tru = a-b;
// let nhan = a*b;
// let chia = a/b;

// if (c == "+" || c == "-" || c == "*") {
//     if(c == "+" ){
//         console.log(`Kết quả phép tính: ${cong}`);
//     }else if( c == "-"){
//         console.log(`Kết quả phép tính: ${tru}`);
//     }else{
//         console.log(`Kết quả phép tính: ${nhan}`);
//     }
// } else{
//     console.log(`Kết quả phép tính: ${chia}`);
// }

//Bài 2:
let soKiemTra;
let a = parseFloat(prompt("Nhập số bạn cần kiểm tra: "));

if (isNaN(a)) {
    soKiemTra = "Bạn vừa nhập không phải là số";
    alert(soKiemTra)
} else {
    soKiemTra = a >= 0 && a <= 100  ? "Là" : "Không phải là";
    alert(soKiemTra +  " số nguyên tố")
}
