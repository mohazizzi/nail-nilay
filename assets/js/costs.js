const costsEl = document.querySelector("[data-costs]");
const costsBtnEl = document.querySelector("[data-costs-btn]");
const costsBtnCloseEl = document.querySelector("[data-costs-btn-close]");

costsBtnEl.addEventListener("click", () => {
  costsEl.classList.add("costs--active");
});
costsBtnCloseEl.addEventListener("click", () => {
  costsEl.classList.remove("costs--active");
});
