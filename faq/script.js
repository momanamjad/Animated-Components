const faqs = document.querySelectorAll(".faq");
const btnsToggle = document.querySelectorAll(".btn-toggle");

btnsToggle.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.parentNode.classList.toggle("active");
  });
});
