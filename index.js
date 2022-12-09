var backDrop = document.getElementById("nav-back");
backDrop.style.color = "rgb(249, 248, 244)";

// trigger this function every time the user scrolls
window.onscroll = function (event) {
   var scroll = window.pageYOffset;
   var elem = document.getElementById("el");
   if (scroll < 300) {
      elem.style.transition = "opacity 0.1s linear 0s";
      elem.style.opacity = 0.0;
      backDrop.style.color = "rgb(249, 248, 244)";
   } else if (scroll >= 300 && scroll < 600) {
      elem.style.transition = "opacity 0.5s linear 0s";
      elem.style.opacity = 0.0;
      backDrop.style.color = "rgb(249, 248, 244)";
   } else if (scroll >= 700 && scroll < 1200) {
      // blue
      elem.style.transition = "opacity 0.4s linear 0.1s";
      elem.style.opacity = 1.0;
      elem.style.backgroundColor = "#0D1E21";
      backDrop.style.transition = "color 0.2s linear 0.2s";
      backDrop.style.color = "#0D1E21";
   } else if (scroll >= 1200 && scroll < 1780) {
      // orange
      elem.style.opacity = 0.0;
      backDrop.style.color = "#0D1E21";
   } else if (scroll >= 1780 && scroll < 6340) {
      // red
      elem.style.opacity = 0.0;
      backDrop.style.color = "#0D1E21";
   } else {
      // purple
      //       elem.style.opacity = 0.0;
      backDrop.style.color = "rgb(249, 248, 244)";
   }
};

/// open/close contact menu

function openChat() {
   var contactFrom = document.getElementById("showcontact");

   contactFrom.classList.add("chat");
   document.getElementById("wf-form-Project-inquiry").classList.add("chat");

   // contactFrom.className = contactFrom.className === "chat" ? "" : "chat";
}

function closeFunction() {
   var contactFrom = document.getElementById("showcontact");
   contactFrom.classList.remove("chat");
   document.getElementById("wf-form-Project-inquiry").classList.remove("chat");
}

function reveal() {
   var reveals = document.querySelectorAll(".reveal");

   for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;

      if (elementTop < windowHeight - elementVisible) {
         reveals[i].classList.add("active");
      } else {
         reveals[i].classList.remove("active");
      }
   }
}

window.addEventListener("scroll", reveal);

const observer = new IntersectionObserver((entries) => {
   entries.forEach((entery) => {
      console.log(entery);
      if (entery.isIntersecting) {
         entery.target.classList.add("show");
      } else {
         entery.target.classList.remove("show");
      }
   });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));
