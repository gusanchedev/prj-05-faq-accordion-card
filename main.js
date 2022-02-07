import "./style.css";

const answers = document.getElementsByClassName("answer");

const questions = document.getElementsByClassName("question");

for (let index = 0; index < questions.length; index++) {
  const element = questions[index];
  let clickedElement = false;
  let visibleAnswer = false;
  element.addEventListener("click", (e) => {
    if (!clickedElement) {
      e.target.style.fontWeight = "bold";
      answers[index].style.display = "block";
      clickedElement = !clickedElement;
      visibleAnswer = !visibleAnswer;
    } else {
      e.target.style.fontWeight = "normal";
      answers[index].style.display = "none";
      clickedElement = !clickedElement;
      visibleAnswer = !visibleAnswer;
    }
  });
}
