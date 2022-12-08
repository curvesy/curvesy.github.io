var backDrop = document.getElementById("nav-back");
backDrop.style.color = "rgb(249, 248, 244)";

// trigger this function every time the user scrolls
window.onscroll = function (event) {
   var scroll = window.pageYOffset;
   if (scroll < 300) {
      // green
      backDrop.style.color = "rgb(249, 248, 244)";
   } else if (scroll >= 300 && scroll < 600) {
      // yellow
      backDrop.style.color = "rgb(249, 248, 244)";
   } else if (scroll >= 600 && scroll < 1200) {
      // blue
      backDrop.style.color = "rgb(249, 248, 244)";
   } else if (scroll >= 1200 && scroll < 1800) {
      // orange
      backDrop.style.color = "#0D1E21";
   } else if (scroll >= 1800 && scroll < 6340) {
      // red
      backDrop.style.color = "#0D1E21";
   } else {
      // purple
      backDrop.style.color = "rgb(249, 248, 244)";
   }
};

/// open/close contact menu

function openChat() {
   document.getElementById("showcontact").style.display = "block";
   document.getElementById("wf-form-Project-inquiry").style.display = "block";
}

function closeFunction() {
   document.getElementById("showcontact").style.display = "none";
   document.getElementById("wf-form-Project-inquiry").style.display = "none";
}
