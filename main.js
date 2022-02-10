import "./style.css";

const answers = document.getElementsByClassName("answer");
const questions = document.getElementsByClassName("question");
const icons = document.getElementsByClassName("icon");

for (let index = 0; index < questions.length; index++) {
  const question = questions[index];
  let clickedElement = false;

  question.addEventListener("click", (e) => {
    if (!clickedElement) {
      e.target.style.fontWeight = "bold";
      answers[index].style.display = "block";
      icons[index].style.transform = "rotate(180deg)";
      clickedElement = !clickedElement;

    } else {
      e.target.style.fontWeight = "normal";
      answers[index].style.display = "none";
      icons[index].style.transform = "rotate(360deg)";
      clickedElement = !clickedElement;

    }
  });
}
