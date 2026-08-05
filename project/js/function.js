const bootscreen = document.getElementById("boot-screen");
const loadingscreen = document.getElementById("login-screen");
const passInput = document.getElementById("password1");
const btn11 = document.getElementById("login-btn");
const desktop = document.getElementById("desktop-screen");
const correctPassword = "1234";
const notes = document.getElementById("notes-window");
const btn_close = document.getElementById("notes-close");
const icons = document.getElementById("notes-icon");
const savebtn = document.getElementById("save-b");
const textnote = document.getElementById("notes-text");
const texttitle = document.getElementById("notes-title");





textnote.value = localStorage.getItem("notes") || "";
texttitle.value = localStorage.getItem("title") || "";

function saveNotes() {
  localStorage.setItem("notes", textnote.value);
  localStorage.setItem("title", texttitle.value);
}

savebtn.addEventListener("click", function () {
  console.log(textnote.value , texttitle.value);
  saveNotes();
  alert("File saved successfully ");
  notes.style.display = "none";
});

icons.addEventListener("click", function () {
  notes.style.display = "flex";
  console.log("clicked");
});

btn_close.addEventListener("click", function () {
  const savedNote = localStorage.getItem("notes") || "";

  if (textnote.value.trim() !== savedNote.trim()) {
    const answer = confirm(
      "You have unsaved changes.\n\nClick OK to save before closing.",
    );

    if (answer) {
      console.log("yes");
      saveNotes();
      notes.style.display = "none";
    } else {
      console.log("no");
    }
  } else {
    notes.style.display = "none";
    console.log("clicked");
  }
});

setTimeout(function () {
  bootscreen.style.display = "none";
  loadingscreen.style.display = "flex";
},1000);

btn11.addEventListener("click", function () {
  console.log("working");
  const enteredPassword = passInput.value.trim();

  if (enteredPassword === correctPassword) {
    loadingscreen.style.display = "none";
    desktop.style.display = "flex";
  } else {
    alert("Incorrect password. Please try again.");
  }
});
