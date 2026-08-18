const bootScreen = document.getElementById("boot-screen");
const loadingScreen = document.getElementById("login-screen");
const passwordInput = document.getElementById("password1");
const loginButton = document.getElementById("login-btn");
const desktopScreen = document.getElementById("desktop-screen");
const correctPassword = "";
const notesWindow = document.getElementById("notes-window");
const closeNotesButton = document.getElementById("notes-close");
const minimizeNotesButton = document.getElementById("notes-min");
const notesIcon = document.getElementById("notes-icon");
const saveNotesButton = document.getElementById("save-b");
const notesTextArea = document.getElementById("notes-text");
const notesTitleInput = document.getElementById("notes-title");
const maximizeNotesButton = document.getElementById("notes-max");
let isWindowMaximized = false;
let CurrentFile = null
let currentFileCard=null

const newNoteButton = document.getElementById("new-b");
const filesContainer = document.getElementById("new_files");

let savedNotes = JSON.parse(localStorage.getItem("fileList")) || [];




const displayNote = (note) => {
  const noteCard = document.createElement("div");
  noteCard.className = "file";

  const titleLabel = document.createElement("span");
  titleLabel.textContent = "🗒️ " + note.title;
  noteCard.appendChild(titleLabel);

  const DeleteFile = document.createElement("button");
  DeleteFile.innerText = "🗑️";
  noteCard.appendChild(DeleteFile);

  filesContainer.appendChild(noteCard);

  noteCard.addEventListener("click", () => {
    CurrentFile = note;
    currentFileCard = noteCard;
    notesTitleInput.value = note.title;
    notesTextArea.value = note.body;
  });

  DeleteFile.addEventListener("click", (event) => {
    event.stopPropagation();
    const index = savedNotes.indexOf(note);
    if (index !== -1) {
      savedNotes.splice(index, 1);
      localStorage.setItem("fileList", JSON.stringify(savedNotes));
      noteCard.remove();
    }
  });
};
  

  

for (let index = 0; index < savedNotes.length; index++) {
    displayNote(savedNotes[index]);
}

const createNewNote = () => {
    const newNote = {
        title:"NewFile",
        body: ""
    };

    console.log("new file working");
    console.log(newNote);

    savedNotes.push(newNote);

    localStorage.setItem("fileList", JSON.stringify(savedNotes));
    displayNote(newNote);
    CurrentFile =newNote;
    

    notesTitleInput.value =newNote.title;
    notesTextArea.value = newNote.body;
};

newNoteButton.addEventListener("click", createNewNote);

  


const toggleNotesWindowSize = () => {
  if (!isWindowMaximized) {
    notesWindow.style.position = "fixed";
    notesWindow.style.top = "0";
    notesWindow.style.left = "0";
    notesWindow.style.width = "100vw";
    notesWindow.style.height = "calc(100vh - 50px)";
    notesWindow.style.borderRadius = "0";
    notesWindow.style.zIndex = "999";
    maximizeNotesButton.innerText = "◾";
    isWindowMaximized = true;
  } else {
    notesWindow.style.position = "absolute";
    notesWindow.style.width = "500px";
    notesWindow.style.height = "450px";
    notesWindow.style.top = "100px";
    notesWindow.style.left = "300px";
    notesWindow.style.borderRadius = "10px";
    maximizeNotesButton.innerText = "⬛";
    isWindowMaximized = false;
  }
};

maximizeNotesButton.addEventListener("click", toggleNotesWindowSize);






notesTextArea.value = localStorage.getItem("notes") || "";
notesTitleInput.value = localStorage.getItem("title") || "";
function saveNotes() {

    if (CurrentFile === null) {
        console.log("No file is open");
        return;
    }

    CurrentFile.title = notesTitleInput.value;
    CurrentFile.body = notesTextArea.value;

    if (currentFileCard) {
      const titleLabel = currentFileCard.querySelector("span");
      if (titleLabel) {
        titleLabel.textContent = "🗒️ " + CurrentFile.title;
      }
    }

    localStorage.setItem(
        "fileList",
        JSON.stringify(savedNotes)
    );

    console.log("File saved:", CurrentFile);
}

saveNotesButton.addEventListener("click", function () {
  console.log(notesTextArea.value, notesTitleInput.value);
  saveNotes();
   alert("File saved successfully");
  


});

notesIcon.addEventListener("click", function () {
  notesWindow.style.display = "flex";
  notesWindow.style.position = "absolute";
  notesWindow.style.width = "500px";
  notesWindow.style.height = "450px";
  notesWindow.style.top = "100px";
  notesWindow.style.left = "300px";
  notesWindow.style.borderRadius = "10px";
  if (maximizeNotesButton) maximizeNotesButton.innerText = "⬜";
  isWindowMaximized = false;
  console.log("clicked");
});

closeNotesButton.addEventListener("click", function () {
  const savedNote = localStorage.getItem("notes") || "";

  if (notesTextArea.value.trim() !== savedNote.trim()) {
    const answer = confirm(
      "You have unsaved changes.\n\nClick OK to save before closing."
    );

    if (answer) {
      console.log("yes");
      saveNotes();
      notesWindow.style.display = "none";
    } else {
      console.log("no");
    }
  } else {
    notesWindow.style.display = "none";
    console.log("clicked");
  }
});

setTimeout(function () {
  bootScreen.style.display = "none";
  loadingScreen.style.display = "flex";
}, 4000);

loginButton.addEventListener("click", function () {
  console.log("working");
  const enteredPassword = passwordInput.value.trim();

  if (enteredPassword === correctPassword) {
    loadingScreen.style.display = "none";
    desktopScreen.style.display = "flex";
  } else {
    alert("Incorrect password. Please try again.");
  }
});


