let quiz = document.querySelectorAll(".Quiz");
let Answer = document.querySelectorAll(".Answer");

quiz.forEach(function (ea) {
  ea.addEventListener("click", function (e) {
    ea.nextElementSibling.classList.toggle("show");

    if (ea.nextElementSibling.classList.contains("show")) {
      ea.lastElementChild.setAttribute("src", "/assets/images/icon-minus.svg");
    } else {
      ea.lastElementChild.setAttribute("src", "/assets/images/icon-plus.svg");
    }
  });
}, quiz.length);
