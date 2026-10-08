// ใช้ร่วมกันทั้ง index.html และ project.html
// ทุกส่วนเช็กก่อนว่า element มีอยู่ในหน้านั้นหรือไม่

// 1. ปีปัจจุบันใน footer
const yearSpan = document.getElementById("year");
if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}

// 2. เมนูแฮมเบอร์เกอร์บนมือถือ
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

if (navToggle && navLinks) {
    navToggle.addEventListener("click", function () {
        const isOpen = navLinks.classList.toggle("open");
        navToggle.classList.toggle("open", isOpen);
        navToggle.setAttribute("aria-expanded", isOpen);
    });

    // กดลิงก์แล้วปิดเมนู (event delegation ที่ <ul> ตัวเดียว)
    navLinks.addEventListener("click", function (event) {
        if (event.target.tagName === "A") {
            navLinks.classList.remove("open");
            navToggle.classList.remove("open");
            navToggle.setAttribute("aria-expanded", false);
        }
    });
}

// 3. รูปโปรไฟล์: ถ้ายังไม่มีไฟล์ images/profile.jpg ให้แสดงตัวอักษรแทน
const avatar = document.getElementById("avatar");
const avatarImg = document.getElementById("avatarImg");

if (avatar && avatarImg) {
    avatarImg.addEventListener("error", function () {
        avatar.classList.add("no-photo");
    });
    // กรณีรูปโหลดพังไปก่อนที่ script จะทำงาน
    if (avatarImg.complete && avatarImg.naturalWidth === 0) {
        avatar.classList.add("no-photo");
    }
}

// 4. ปุ่มกลับขึ้นด้านบน
const backToTop = document.getElementById("backToTop");

if (backToTop) {
    window.addEventListener("scroll", function () {
        backToTop.classList.toggle("show", window.scrollY > 400);
    });

    backToTop.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}

// 5. ให้ section ค่อย ๆ ปรากฏขึ้นเมื่อเลื่อนมาถึง
const revealItems = document.querySelectorAll(".reveal");

function checkReveal() {
    const triggerPoint = window.innerHeight * 0.88;
    for (let i = 0; i < revealItems.length; i++) {
        if (revealItems[i].getBoundingClientRect().top < triggerPoint) {
            revealItems[i].classList.add("visible");
        }
    }
}

window.addEventListener("scroll", checkReveal);
window.addEventListener("resize", checkReveal);
checkReveal();
