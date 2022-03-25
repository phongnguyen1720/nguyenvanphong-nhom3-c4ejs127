let registration = document.getElementById("registration");
registration.onsubmit = (event) => {
    event.preventDefault();
    setTextError("emailError", "");
    setTextError("passwordError", "");
    setTextError("confirmPasswordError", "");
    let checkInformation = true;
    let email = registration.email.value;
    let password = registration.password.value;
    let confirmPassword = registration.confirmPassword.value;
    if (!email) {
        checkInformation = false;
        setTextError("emailError", "Vui lòng điền đầy đủ Email");
    }
    if (!password) {
        checkInformation = false;
        setTextError("passwordError", "Vui lòng nhập password");
    } else {
        if (password.length < 12) {
            checkInformation = false;
            setTextError("passwordError", "Vui lòng nhập đủ ít nhất 12 ký tự");
        } else {
            if (password != confirmPassword) {
                setTextError("confirmPasswordError", "Mật khẩu nhập lại chưa chính xác");
            }
        }
    }
    if (!confirmPassword) {
        setTextError("confirmPasswordError", "Mật khẩu nhập lại chưa chính xác");
    }
    if (checkInformation) {
        console.log("Heloo");
    }
};
setTextError = (id, text) => {
    document.getElementById(id).innerHTML = text;
}