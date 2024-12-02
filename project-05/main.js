const reviews = [
  {
    id: 1,
    name: "susan smith",
    img: "bg.png",
    text: "lorem hfi fj 1",
  },
  {
    id: 2,
    name: "Nimal smith",
    img: "bg.png",
    job: "backend developer",
    text: "lorem hfi fj 2",
  },
  {
    id: 3,
    name: "smith smith",
    img: "bg.png",
    job: "fullstack developer",
    text: "lorem hfi fj 3",
  },
  {
    id: 4,
    name: "pakal smith",
    img: "bg.png",
    job: "frontend develope",
    text: "lorem hfi fj 4",
  },
];

const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");
// console.log(img);

const preveBtn = document.querySelector(".prev-btn");

const nextBtn = document.querySelector(".next-btn");

const randomBtn = document.querySelector(".random-btn");

let currentItem = 0;

///load intial item

window.addEventListener("DOMContentLoaded", () => {


  showPerson(currentItem);
});

function showPerson(person) {
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}

//show next person

nextBtn.addEventListener("click", () => {
  currentItem++;

  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});

preveBtn.addEventListener("click", () => {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});

randomBtn.addEventListener("click", () => {
  currentItem = Math.floor(Math.random() * reviews.length);

  showPerson(currentItem);
});
