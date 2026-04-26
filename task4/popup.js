document.addEventListener("DOMContentLoaded", () => {

    const input = document.getElementById("noteInput");
    const button = document.getElementById("saveBtn");
    const list = document.getElementById("notesList");

    function displayNotes() {
        let notes = JSON.parse(localStorage.getItem("notes")) || [];
        list.innerHTML = "";

        notes.forEach(n => {
            let li = document.createElement("li");
            li.textContent = n;
            list.appendChild(li);
        });
    }

    button.addEventListener("click", () => {
        let note = input.value.trim();

        if (note === "") return;

        let notes = JSON.parse(localStorage.getItem("notes")) || [];
        notes.push(note);

        localStorage.setItem("notes", JSON.stringify(notes));

        input.value = "";
        displayNotes();
    });

    displayNotes();
});