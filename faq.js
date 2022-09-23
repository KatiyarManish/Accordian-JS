const faqData = [
  {
    id: 1,
    question: "Who are we?",
    answer:
      "We enable upscaling careers through flexible, interactive and collaborative learning. We believe in building learning communities by bringing together mentors, young minds, and creators.",
  },
  {
    id: 2,
    question: "What do we do?",
    answer:
      "Building learning communities with Our Affordable & Competent Courses",
  },
  {
    id: 3,
    question: "Are the community classes boring?",
    answer: "No, not at all!!!",
  },

  {
    id: 4,
    question: "Are the live classes boring?",
    answer: "No, not at all!!!",
  },
];

let accordianBody = document.querySelector(".accordian_body");

// Add html

function createFaq(titleparameter, textparameter) {
  let container = document.createElement("div");
  let faq = document.createElement("div");

  let faq1 = document.createElement("div");
  let title = document.createElement("h3");
  let text = document.createElement("p");

  let faq2 = document.createElement("div");
  let plusBtn = document.createElement("button");
  let minusBtn = document.createElement("button");

  // add classes

  container.setAttribute("class", "container");
  faq.setAttribute("class", "faq");
  title.setAttribute("class", "faq-title");
  text.setAttribute("class", "faq-text");
  faq2.setAttribute("class", "btns");
  plusBtn.setAttribute("class", "plus");
  minusBtn.setAttribute("class", "minus");

  // append html and create sturcture
  accordianBody.appendChild(container);
  container.appendChild(faq);
  faq.appendChild(faq1);
  faq.appendChild(faq2);
  faq1.appendChild(title);
  faq1.appendChild(text);
  faq2.appendChild(plusBtn);
  faq2.appendChild(minusBtn);

  // add text content in structure

  title.textContent = titleparameter;
  text.textContent = textparameter;
  plusBtn.textContent = "+";
  minusBtn.textContent = "-";

  // events

  plusBtn.addEventListener("click", function () {
    plusBtn.parentElement.parentElement.classList.add("active");
  });

  minusBtn.addEventListener("click", function () {
    minusBtn.parentElement.parentElement.classList.remove("active");
  });
}

// function showFaq() {
//   for (let i = 0; i < faqData.length; i++) {
//     createFaq(faqData[i].question, faqData[i].answer);
//   }
// }

// showFaq();

faqData.map((item) => {
  createFaq(item.question, item.answer);
});
