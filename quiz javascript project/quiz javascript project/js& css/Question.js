
window.onload =function ()  {
  show(question_count);
}
//question will be asked
let questions = [
  {
    id: 0,
    question: "What is the full form of RAM ?",
    answer: "Random Access Memory",
    options: [
      "Random Access Memory",
      "Randomely Access Memory",
      "Run Aceapt Memory",
      "None of these"
    ]
  },
  {
    id: 1,
    question: "What is the full form of CPU?",
    answer: "Central Processing Unit",
    options: [
      "Central Program Unit",
      "Central Processing Unit",
      "Central Preload Unit",
      "None of these"
    ]
  },
  {
    id: 2,
    question: "What is the full form of E-mail",
    answer: "Electronic Mail",
    options: [
      "Electronic Mail",
      "Electric Mail",
      "Engine Mail",
      "None of these"
    ]
  },
  {
    id: 3,
    question: "who is the prime minister of India?",
    answer: "narendra Modi",
    option: [
      "Narendra modi",
      "mukesh Ambani",
      "Amit shah",
      "yogi Adhityanath"
    ]
  }
]
let question_count = 0;
//let points = 0;

function next() {
  question_count++
//if question is lastthen redirect to final page
//if(question_count == questions.length - 1){
  //sessionStorage.setItem("time",time);
  //clearInterval(mytime);
  //location.href="back.html";

}
  let user_answer = document.querySelector("li.option.active");
  //check answer by user
  if
    (user_answer == questions[question_count].answer) {
    Point += 10;
    sessionStorage.setItem("points",point);
    }
     console.log(point);
question_count++;
show(question_count)
  
function show(count) {
  let question = document.getElementById("questions");
  let[first,second,third,fourth]=questions[count].options;

 
  question.innerHTML = `
  <h2>Q ${questions[count].question} </h2>
  <ul class="option-container" id="option">
    <li class="option">${first}</li>
    <li class="option">${second}</li>
    <li class="option">${third}</li>
    <li class="option">${fourth}</li>
  </ul>
    `;
  toggleActive();
}
function toggleActive() {
  let option = document.querySelectorAll("li.option");

  for (let i = 0; i < option.length; i++) {
    option[i].onclick = function () {
      for (let j = 0; j < option.length; j++) {
        if (option[j].classList.contains("active")) {
          option[j].classList.remove("active");
        }
      }
      option[i].classList.add("active");
    }
  }
}
