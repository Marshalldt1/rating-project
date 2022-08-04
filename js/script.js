const button = document.querySelectorAll(".buttons button");
const buttonArray = Array.from(button);

function ativarBtn(index) {
  button.forEach((item) => {
    item.classList.remove("ative-btn");
  });
  button[index].classList.add("ative-btn");
}
button.forEach((item, index) => {
  item.addEventListener("click", () => {
    ativarBtn(index);
  });
});

const sections = document.querySelectorAll("section");
const submit = document.querySelector(".submit-btn");
const divNota = document.querySelector(".selected-rating");

sections[0].classList.add("ative");

submit.addEventListener("click", (item) => {
  sections.forEach((item) => {
    item.classList.toggle("ative");
  });
  divNota.innerHTML = "You selected " + score + " out of 5";
});
