function goMenu(userType) {
  // جميع أنواع المستخدمين تروح للقائمة الرئيسية
  window.location.href = "menu.html";
}

function goPage(page) {
  window.location.href = page;
}

function sendMsg() {
  const input = document.getElementById("msgInput");
  const chat = document.getElementById("chatBox");
  if (!input.value.trim()) return;

  const userMsg = document.createElement("div");
  userMsg.className = "msg";
  userMsg.textContent = input.value;
  chat.appendChild(userMsg);

  const botMsg = document.createElement("div");
  botMsg.className = "msg bot";
  botMsg.textContent = "تم استلام رسالتك 🤍";
  chat.appendChild(botMsg);

  input.value = "";
}
