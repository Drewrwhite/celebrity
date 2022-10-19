function hideResultsAndError() {
  document.getElementById("error-message").setAttribute("class", "hidden");
  document.getElementById("celeb1").setAttribute("class", "hidden");
  document.getElementById("celeb2").setAttribute("class", "hidden");
  document.getElementById("celeb3").setAttribute("class", "hidden");
  document.getElementById("celeb4").setAttribute("class", "hidden");
  document.getElementById("sorry").setAttribute("class", "hidden");
}

window.onload = function () {
  document.querySelector("form").onsubmit = function (event) {
    hideResultsAndError();
    event.preventDefault();

    const animals = document.querySelector("input#animals").value.toLowerCase();
    const foods = document.querySelector("input#foods").value.toLowerCase();

    if (!animals || !foods) {
      document.getElementById("error-message").removeAttribute("class");
    } else {
      if (animals === "dogs" && foods === "fruits") {
        document.getElementById("celeb1").removeAttribute("class");
      } else if (animals === "cats" && foods === "veggies") {
        document.getElementById("celeb2").removeAttribute("class");
      } else if (animals === "dogs" && foods === "veggies") {
        document.getElementById("celeb3").removeAttribute("class");
      } else if (animals === "cats" && foods === "fruits") {
        document.getElementById("celeb4").removeAttribute("class");
      } else {
        document.getElementById("error-message").removeAttribute("class");
      }
    }
  };
};