function goMenu(type) {
  localStorage.setItem("userType", type);
  window.location.href = "chat.html";
}

function sendMessage() {
  const input = document.getElementById("userInput");
  const messages = document.getElementById("messages");

  if (input.value.trim() === "") return;

  const userMsg = document.createElement("div");
  userMsg.className = "user-msg";
  userMsg.innerText = input.value;
  messages.appendChild(userMsg);

  const botMsg = document.createElement("div");
  botMsg.className = "bot-msg";
  botMsg.innerText = "تمام ✨ طلبك وصل، قريب بخدمتك.";
  messages.appendChild(botMsg);

  input.value = "";
  messages.scrollTop = messages.scrollHeight;
}
