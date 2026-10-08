// =============================================================================
// MDT312 Assignment 6 register.js
// Modernized: ES6 (const/let), event.preventDefault(), and localStorage
// =============================================================================

window.onload = pageLoad;

function pageLoad() {
    // ผูก event onsubmit ให้กับฟอร์ม เพื่อให้ validateForm ทำงานทุกครั้งที่กด Register
    const form = document.getElementById("myRegister");
    if (form) {
        form.onsubmit = validateForm;
    }
}

function validateForm(event) {
    const errorMsg = document.getElementById("errormsg");
    const form = document.forms["myRegister"];

    const firstname = form["firstname"].value.trim();
    const lastname = form["lastname"].value.trim();
    const genderInputs = form["gender"];
    const bday = form["bday"].value;
    const email = form["email"].value.trim();
    const username = form["username"].value.trim();
    const passwords = form["password"];
    const password = passwords[0].value;
    const retypePassword = passwords[1].value;

    // 1. ตรวจสอบว่า Password ทั้ง 2 ช่องตรงกันหรือไม่ ถ้าไม่ตรงกันให้แจ้งเตือน และให้return false
    if (password !== retypePassword) {
        errorMsg.innerHTML = "รหัสผ่านและยืนยันรหัสผ่านไม่ตรงกัน กรุณากรอกใหม่อีกครั้ง";
        event.preventDefault();
        return false;
    }

    // 2. เคลียร์ข้อความแจ้งเตือนถ้าผ่านการตรวจสอบ
    errorMsg.innerHTML = "";

    // 3. บันทึกข้อมูลลงใน localStorage ทีละตัว
    // เพื่อความปลอดภัย: รหัสผ่านไม่ปรากฏบน Browser Address Bar และ Browser History
    let gender = "";
    for (let i = 0; i < genderInputs.length; i++) {
        if (genderInputs[i].checked) {
            gender = genderInputs[i].value;
            break;
        }
    }

    localStorage.setItem("firstname", firstname);
    localStorage.setItem("lastname", lastname);
    localStorage.setItem("gender", gender);
    localStorage.setItem("bday", bday);
    localStorage.setItem("email", email);
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);

    alert("ลงทะเบียนสำเร็จ! ระบบบันทึกข้อมูลเรียบร้อย กำลังไปที่หน้า Login");

    // 4. นำทางไปหน้า login.html
    event.preventDefault();
    window.location.href = "login.html";
    return true;
}