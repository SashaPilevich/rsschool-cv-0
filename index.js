let englishBlock = document.getElementById('english');
let percent = document.querySelector('.percent');
let loader = document.querySelector('.english-loader');
let interval;
let current = 0;

let heightBlock = englishBlock.offsetHeight;
let offsetBlock = offset(englishBlock).top;
const animStart = 4;
let animItemPoint = window.innerHeight - heightBlock / animStart;

window.addEventListener('scroll', () => {
  if (
    scrollY > offsetBlock - animItemPoint &&
    screenY < offsetBlock + heightBlock
  ) {
    interval = setInterval(increment, 100);
  }
});


const btnTop = document.getElementById('scrollToTop');
window.addEventListener('scroll', () => {
  if (window.scrollY >= 500) {
    btnTop.style.display = 'block';
  } else {
    btnTop.style.display = 'none';
  }
});

btnTop.addEventListener('click', () => {
  window.scrollTo(0, 0);
});

let isOpen = false;
const burger = document.querySelector('.burger-menu');
const burgerLine = document.querySelector('.burger-line');
const mobilenav = document.querySelector('.mobile-nav');
const link = document.querySelector('.nav-list-mobile');

burger.addEventListener('click', () => {
  if (!isOpen) {
    burger.classList.add('active');
    burgerLine.classList.add('active');
    mobilenav.classList.add('active');
    isOpen = true;
  } else {
    burger.classList.remove('active');
    burgerLine.classList.remove('active');
    mobilenav.classList.remove('active');
    isOpen = false;
  }
});

link.addEventListener("click", () => {
  burger.classList.remove("active");
  burgerLine.classList.remove("active");
  mobilenav.classList.remove("active");
  isOpen = false;
});

function offset(el) {
  const rect = el.getBoundingClientRect();
  const scrollLeft = window.scrollX || document.documentElement.scrollLeft;
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
}
function increment() {
  if (current <= 78) {
    current = current + 1;
    percent.innerHTML = current + "%";
    loader.classList.add("finish");
  } else {
    clearInterval(interval);
  }
}
