// //Bài 1:

// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm("Did parents allow you?");  //Dòng này sẽ trả về true nếu kết quả đúng
//   }
// }

// function checkAge(age) {
//     return (age > 18) ? true : confirm('Bạn chưa đủ tuổi để sang trang tiếp!');
//   }
// let age = parseInt(prompt("Nhập vào số tuổi hợp lệ:"));
// checkAge(age);

//Bài 2:

// let num = [5, 4, 7, 2, 8, 7, 3];
// let min = num.reduce(function (accumulator, element) {
//   return accumulator < element ? accumulator : element;
// });
// alert(`Số nhỏ nhất trong mảng là: ${min}`)

//Bài 3:
// function ask(question, yes, no) {
//   if (confirm(question)) yes();
//   else no();
// }

// ask(
//   "Do you agree?",
//   () => alert("You agreed."),
//   () => alert("You canceled the execution.")
// );

//Bài 4:
let user = parseFloat(prompt("Nhập tên đăng nhập: "));
let condition = 1;
if (user == "admin") {
  var keyword = parseFloat(prompt("Nhập mật khẩu: "));
} else if (user == "") console.log("Canceled");
else {
  console.log("Tôi không biết bạn");
  condition = 0;
}
if (condition == 1) {
  if (keyword == "mindX") alert("Chào mừng!");
  else if (keyword == "") alert("Đã huỷ");
  else if (keyword != "") alert("Mật khẩu sai");
}
