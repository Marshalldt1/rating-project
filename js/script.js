// variables and selectores
const button = document.querySelectorAll(".buttons button");
const sections = document.querySelectorAll("section");
const submit = document.querySelector(".submit-btn");
const divNota = document.querySelector(".selected-rating");
let score;

// function for add classe for button
function ativarBtn(index) {
  button.forEach((item) => {
    item.classList.remove("ative-btn");
  });
  button[index].classList.add("ative-btn");
}
// add classe to button
button.forEach((item, index) => {
  item.addEventListener("click", () => {
    ativarBtn(index);
    score = index + 1;
  });

  // add class "ative for changer"
  sections[0].classList.add("ative");
  // event for submit click
  submit.addEventListener("click", () => {
    //check if button 1,2,3,4 or 5 is clicked
    // if not make button unclickable
    for (let i = 0; i < button.length; i++) {
      if (button[i].classList.contains("ative-btn")) {
        score = i + 1;
        // hide rating and show thank you container
        sections.forEach((item) => {
          item.classList.toggle("ative");
        });
        console.log(score);
      }
    }
    // score value
    divNota.innerHTML = "You selected " + score + " out of 5";
  });
});
