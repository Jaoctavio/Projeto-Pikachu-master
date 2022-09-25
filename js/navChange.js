function changeBody(page) {
  console.log("Tô no NavChange");
  fetch(page)
    .then((res) => res.text())
    .then((res) => {
      document.body.innerHTML = res;
    });
}

function dark_mode() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}

let mybutton = document.getElementById("myBtn");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
