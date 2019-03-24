const icons = ['fa-cat', 'fa-dog', 'fa-crow', 'fa-frog', 'fa-horse', 'fa-hippo', 'fa-fish'];
const iconContainer = document.querySelector('.iconContainer');
const icon = iconContainer.getElementsByTagName('i')[0];
const size = 140;
iconContainer.style.width = size + 'px'; 
iconContainer.style.height = size + 'px'; 

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
    icon.className = '';
    const body = document.body;
    const clientWidth = body.clientWidth
    const clientHeight = body.clientHeight;
    iconContainer.style.left = getRandomPixels(clientWidth - size);
    iconContainer.style.top = getRandomPixels(clientHeight - size);
    icon.classList.add('fas', `${icons[Math.floor(Math.random() * icons.length)]}`);
}

const debounced = debounce(changePosition);

changePosition();
window.addEventListener('resize', debounced);
icon.addEventListener('click', changePosition);