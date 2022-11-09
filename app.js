const myImages = [
  {
    url: "_TIG0444.JPG",
    title: "Family",
    subText: "How do you treat your family?",
  },
  {
    url: "9.jpg",
    title: "Temitope",
    subText: "My beloved sister",
  },
  {
    url: "DSC_8325.JPG",
    title: "Mr Haywhy",
    subText: "And this is me",
  },
  {
    url: "DSC_8335.JPG",
    title: "Family Again",
    subText: "How much do you love them?",
  },
  {
    url: "DSC_8342.JPG",
    title: "I and my sisters",
    subText: "These ones are the loving being i know",
  },
  {
    url: "DSC_8344.JPG",
    title: "Mr Haywhy & ZA",
    subText: "Zionic Adorn my Bro",
  },
];

const slides = document.querySelector(".slides");
const carousel = document.querySelector(".carousel");
const prevBtn = document.querySelector(".prevBtn");
const nextBtn = document.querySelector(".nextBtn");
const page = { sildeList: [], dots: [], counter: 0 };

prevBtn.addEventListener("click", (e) => {
  page.counter--;
  showImages();
});

nextBtn.addEventListener("click", (e) => {
  page.counter++;
  showImages();
});

window.addEventListener("DOMContentLoaded", showImages);

function showImages() {
  console.log(page.counter);
  if (page.counter < 0) {
    page.counter = page.sildeList.length - 1;
  }
  if (page.counter >= page.sildeList.length) {
    page.counter = 0;
  }
  page.sildeList.forEach((el) => {
    el.style.display = "none";
  });
  page.sildeList[page.counter].style.display = "block";
}

myImages.forEach((img, index) => {
  const conCard = document.createElement("div");
  conCard.classList.add("slide");
  conCard.innerHTML = `<img src='${img.url}' alt='${img.title}'> 
  <p>${img.subText}</p>`;
  page.sildeList.push(conCard);
  slides.append(conCard);
});
