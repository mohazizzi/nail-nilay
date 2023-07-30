//  form el
const form = document.querySelector("[data-form]");
const month = document.querySelector("[data-month]");
const day = document.querySelector("[data-day]");
const time = document.querySelector("[data-time]");
const work = document.querySelector("[data-work]");
const formName = document.querySelector("[data-name]");
const tel = document.querySelector("[data-tel]");
// popup el
const popup = document.querySelector("[data-popup]");
const popupId = document.querySelector("[data-popup-id]");
const popupMonth = document.querySelector("[data-popup-month]");
const popupDay = document.querySelector("[data-popup-day]");
const popupTime = document.querySelector("[data-popup-time]");
const popupWork = document.querySelector("[data-popup-work]");
const popupName = document.querySelector("[data-popup-name]");
const popupTel = document.querySelector("[data-popup-tel]");
const popupBtn = document.querySelector("[data-popup-btn]");
// payment el
const paymentEL = document.querySelector("[data-payment]");
// err el
const errEl = document.querySelector("[data-err]");

function formSubmit() {
  if (
    !month.value ||
    !day.value ||
    !time.value ||
    !work.value ||
    !formName.value ||
    !tel.value
  ) {
    return formErr();
  }

  popupId.textContent = Math.floor(Math.random() * 1000000 + 1000);
  popupMonth.textContent = month.value;
  popupDay.textContent = day.value;
  popupTime.textContent = time.value;
  popupWork.textContent = work.value;
  popupName.textContent = formName.value;
  popupTel.textContent = tel.value;

  form.classList.remove("reservation__active");
  popup.classList.add("reservation__active");
}
function backToForm() {
  popup.classList.remove("reservation__active");
  form.classList.add("reservation__active");
  paymentEL.classList.remove("displat--block");
}
function payment() {
  paymentEL.classList.add("display--block");
}
function backToHome() {
  payment.classList.remove("display--block");
  popup.classList.remove("reservation__active");
  form.classList.add("reservation__active");

  month.value = "";
  day.value = "";
  time.value = "";
  work.value = "";
  formName.value = "";
  tel.value = "";
  popupId.value = "";
  popupMonth.value = "";
  popupDay.value = "";
  popupTime.value = "";
  popupWork.value = "";
  popupName.value = "";
  popupTel.value = "";
}
// handle errs
function formErr() {
  errEl.classList.add("display--block");
}
function errClose() {
  errEl.classList.remove("display--block");
}
