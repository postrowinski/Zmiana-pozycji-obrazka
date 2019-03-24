const icon = document.querySelector('.icon');
const size = 140;
icon.style.width = size + 'px'; 
icon.style.height = size + 'px'; 

function debounce(func, wait = 50) {
    let timeout;
    return function(...args) {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        func.apply(this, args);
      }, wait);
    };
  }

const getRandomPixels = (max) => Math.floor(Math.random() * (Math.floor(max) - 1)) + 'px';

const changePosition = () => {
    const body = document.body;
    const clientWidth = body.clientWidth
    const clientHeight = body.clientHeight;
    icon.style.left = getRandomPixels(clientWidth - size);
    icon.style.top = getRandomPixels(clientHeight - size);
}

const debounced = debounce(changePosition);

changePosition();
window.addEventListener('resize', debounced);
icon.addEventListener('click', changePosition);