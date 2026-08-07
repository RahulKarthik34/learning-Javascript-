const bootscreen = document.getElementById("boot-screen");
const loadingscreen = document.getElementById("login-screen");
const passInput = document.getElementById("password1");
const btn11 = document.getElementById("login-btn");
const desktop = document.getElementById("desktop-screen");
const correctPassword = "";
const notes = document.getElementById("notes-window");
const btn_close = document.getElementById("notes-close");
const btn_min = document.getElementById("notes-min");
const icons = document.getElementById("notes-icon");
const savebtn = document.getElementById("save-b");
const textnote = document.getElementById("notes-text");
const texttitle = document.getElementById("notes-title");
const notemax  = document.getElementById("notes-max");
let ismaxsize = false;
const notebook =document.getElementById("new-b")


const box =document.getElementById("new_files")


const notes1 = [];



const filemix=()=>{
  const note ={
  title:"Untitled",
  body:""
}
console.log("new file working")
console.log(note)
notes1.push(note)
const box1 = document.createElement("div");
box1.innerText="📄hello";
box1.className="file"
box.appendChild(box1)
}
notebook.addEventListener("click",filemix)
    
       


const mote =()=>{
  if(!ismaxsize){
    // maximize to viewport while leaving the taskbar visible
    notes.style.position = "fixed";
    notes.style.top = "0";
    notes.style.left = "0";
    notes.style.width = "100vw";
    notes.style.height = "calc(100vh - 50px)";
    notes.style.borderRadius = "0";
    notes.style.zIndex = "999";
    notemax.innerText = "◾";
    ismaxsize = true;
  }else{
    // restore to previous windowed size
    notes.style.position = "absolute";
    notes.style.width = "500px";
    notes.style.height = "450px";
    notes.style.top = "100px";
    notes.style.left = "300px";
    notes.style.borderRadius = "10px";
    notemax.innerText = "⬛";
    ismaxsize = false;
  }
}

notemax.addEventListener("click",mote);





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
  // open notes in default windowed size
  notes.style.display = "flex";
  notes.style.position = "absolute";
  notes.style.width = "500px";
  notes.style.height = "450px";
  notes.style.top = "100px";
  notes.style.left = "300px";
  notes.style.borderRadius = "10px";
  if (notemax) notemax.innerText = "⬜";
  ismaxsize = false;
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
