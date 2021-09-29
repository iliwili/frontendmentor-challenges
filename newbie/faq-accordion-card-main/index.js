let faqList = document.getElementsByClassName("faq-list")[0].children;
let cFaqElement;

for (let i = 0; i < faqList.length; i++) {
  faqList[i].addEventListener("click", () => {
    openAccordion(faqList[i]);
  });
}

function openAccordion(el) {
  if (cFaqElement == el) {
    cFaqElement.classList.remove("open");
    cFaqElement.classList.add("closed");

    cFaqElement = null;
    return;
  }

  if (cFaqElement) {
    cFaqElement.classList.remove("open");
    cFaqElement.classList.add("closed");
  }

  cFaqElement = el;

  cFaqElement.classList.remove("closed");
  cFaqElement.classList.add("open");
}
