// التنقل بين الصفحات
function goChat() {
  window.location.href = "chat.html";
}

function goMenu() {
  window.location.href = "menu.html";
}

function goGroup() {
  window.location.href = "group.html";
}

function goOutfit() {
  window.location.href = "outfit.html";
}

function goLogin() {
  window.location.href = "index.html";
}

// أزرار غير جاهزة الآن
function goChannel() {
  alert("القناة ستكون متاحة قريبًا ✨");
}

function goProfile() {
  alert("صفحة الحساب قيد التطوير 👤");
}

// إرسال رسالة (واجهة فقط)
document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".send-btn");

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      const input = btn.previousElementSibling;
      if (input && input.value.trim() !== "") {
        alert("تم إرسال الرسالة (تجريبي)");
        input.value = "";
      }
    });
  });
});
