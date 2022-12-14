let current = 0;
let englishBlock = document.getElementById("english");
let heightBlock = englishBlock.offsetHeight;
let offsetBlock = offset(englishBlock).top;
const animStart = 4;
let animItemPoint = window.innerHeight - heightBlock / animStart;

function offset(el) {
  const rect = el.getBoundingClientRect();
  const scrollLeft = window.scrollX || document.documentElement.scrollLeft;
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
}
let percent = document.querySelector(".percent");
let loader = document.querySelector(".english-loader");
let interval;

window.addEventListener("scroll", () => {
  if (
    scrollY > offsetBlock - animItemPoint &&
    screenY < offsetBlock + heightBlock
  ) {
    interval = setInterval(increment, 100);
  }
});

function increment() {
  if (current <= 78) {
    current = current + 1;
    percent.innerHTML = current + "%";
    loader.classList.add("finish");
  } else {
    clearInterval(interval);
  }
}

const banner = document.querySelector('.profile-wrapper')
const title = document.querySelector('.profile-info')
const img = document.querySelector('.profile-image')

window.addEventListener('scroll',() => {
  parallax(banner,5);
})
function parallax(elem,speed){
  let scroll_value = window.scrollY;
  if(scroll_value <= 300){
    elem.style.transform = 'translateX('+(-scroll_value/speed)+'px)';
  } 
  else {
    return;
  }
}

const btnTop = document.getElementById('scrollToTop')
window.addEventListener('scroll',() => {
  if(window.scrollY >= 500){
    btnTop.style.display = 'block'
  } else {
    btnTop.style.display = 'none'
  }
})
btnTop.addEventListener('click',() => {
  window.scrollTo(0,0)
})



