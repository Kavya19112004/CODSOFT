const socket = io();

const username = prompt("Enter your name:") || "Anonymous";

function sendMessage() {
    const input = document.getElementById("msg");

    if (input.value.trim() !== "") {
        const time = new Date().toLocaleTimeString();

        const message = {
            user: username,
            text: input.value,
            time: time
        };

        socket.emit("chat message", message);
        input.value = "";
    }
}

document.getElementById("msg").addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        sendMessage();
    }
});

socket.on("chat message", function(msg) {
    const li = document.createElement("li");

    li.textContent = `${msg.user} [${msg.time}]: ${msg.text}`;

    document.getElementById("messages").appendChild(li);

    const msgBox = document.getElementById("messages");
    msgBox.scrollTop = msgBox.scrollHeight;
});
