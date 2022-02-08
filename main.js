import "./style.css";

const answers = document.getElementsByClassName("answer");
const questions = document.getElementsByClassName("question");
const icons = document.getElementsByClassName("icon");

for (let index = 0; index < questions.length; index++) {
  const question = questions[index];
  let clickedElement = false;
  // let visibleAnswer = false;
  // let displayedIcon = false;
  question.addEventListener("click", (e) => {
    if (!clickedElement) {
      e.target.style.fontWeight = "bold";
      answers[index].style.display = "block";
      icons[index].style.transform = "rotate(180deg)";
      clickedElement = !clickedElement;
      // visibleAnswer = !visibleAnswer;
      // displayedIcon = !displayedIcon;
    } else {
      e.target.style.fontWeight = "normal";
      answers[index].style.display = "none";
      icons[index].style.transform = "rotate(360deg)";
      clickedElement = !clickedElement;
      // visibleAnswer = !visibleAnswer;
      // displayedIcon = !displayedIcon;
    }
  });
}
