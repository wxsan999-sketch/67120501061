window.onload = setupFunction;

function setupFunction() {
   
    document.getElementById("top").innerHTML = "Welcome to the Forum";

    // Unobtrusive event handlers: ผูก event ผ่าน JavaScript แทนการเขียน onclick ใน HTML
    document.getElementById("postBtn").onclick = postFunction;
    document.getElementById("clearBtn").onclick = clearFunction;
}

// สร้างตัวแปรนับลำดับการโพสต์ชื่อว่า postCount และกำหนดค่าเริ่มต้นเป็น 0
var postCount = 0;

function postFunction() {
  
    var messageBox = document.getElementById("message");
    var text = messageBox.value;

    if (text.trim() === "") {
        return;
    }

    // 2. นำข้อความไปใส่ในแต่ละกล่องตามลำดับ:
    // ใช้ textContent แทน innerHTML เพราะเป็นข้อความจากผู้ใช้ (ป้องกัน XSS)
    if (postCount === 0) {

        document.getElementById("topic").textContent = text;
    } else if (postCount === 1) {

        document.getElementById("reply1").textContent = text;
    } else if (postCount === 2) {

        document.getElementById("reply2").textContent = text;
    } else {
        return;
    }

   
    messageBox.value = "";

    
    postCount++;
}

function clearFunction() {
   
    document.getElementById("topic").textContent = "";
    document.getElementById("reply1").textContent = "";
    document.getElementById("reply2").textContent = "";

   
    document.getElementById("message").value = "";

   
    postCount = 0;
}
