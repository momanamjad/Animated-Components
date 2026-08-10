const data = [
  {
    id: "1",
    question: "What is JavaScript?",
    answer:
      "JavaScript is a programming language used to create dynamic and interactive web content.",
  },
  {
    id: "2",
    question: "What are JavaScript variables?",
    answer:
      "Variables are containers used to store data values such as numbers, strings, or objects.",
  },
  {
    id: "3",
    question: "What is the difference between let and const?",
    answer:
      "Variables declared with 'let' can be reassigned, while 'const' variables cannot be reassigned after initialization.",
  },
  {
    id: "4",
    question: "What are JavaScript functions?",
    answer:
      "Functions are blocks of code designed to perform specific tasks and can be reused multiple times.",
  },
  {
    id: "5",
    question: "What is the DOM in JavaScript?",
    answer:
      "The DOM (Document Object Model) represents the structure of a webpage, allowing JavaScript to modify its content and style dynamically.",
  },
];

const accordionWrapper = document.querySelector(".accordion-wrapper");

function createAccordionData() {
  accordionWrapper.innerHTML = data
    .map((accordion) => {
      return `
     <div class="accordion">
          <div class="accordion-title">
            <h1>${accordion.question}</h1>
            <i class="fa-solid fa-arrow-up"></i>
          </div>

          <p class="accordion-description">${accordion.answer}</p>
        </div>
      `;
    })
    .join("");
}

createAccordionData();

const accordionTitle = document.querySelectorAll(".accordion-title");

accordionTitle.forEach((accordion) => {
  accordion.addEventListener("click", () => {
    if (accordion.classList.contains("active")) {
      accordion.classList.remove("active");
    } else {
      const accordionActives = document.querySelectorAll(
        ".accordion-title.active"
      );

      accordionActives.forEach((acc) => acc.classList.remove("active"));
      accordion.classList.add("active");
    }
  });
});
