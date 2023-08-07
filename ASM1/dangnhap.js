var tk = document.getElementById("tk");
var mk = document.getElementById("mk");
function dangnhap() {
  if (tk.value == "") {
    alert("Vui lòng nhập tài khoản!");
    tk.focus();
  }
  if (mk.value == "") {
    alert("Vui lòng nhập Mật khẩu!");
    mk.focus();
  }
  if (tk.value != "" && mk.value != "") {
    document.getElementById("chuyen").setAttribute("href", "modau.html");
  }
  getAndShowName();
}
