const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.querySelector('#nav');
const toggleIcon = document.querySelector('#toggle-icon');
const mainImage = document.querySelector('#main-image');

const project1_Img = document.querySelector('#project-1');
const project2_Img = document.querySelector('#project-2');
const project3_Img = document.querySelector('#project-3');
const project4_Img = document.querySelector('#project-4');
const project5_Img = document.querySelector('#project-5');
const project6_Img = document.querySelector('#project-6');
const project7_Img = document.querySelector('#project-7');

function darkMode() {
  toggleSwitch.checked = true;
  nav.style.background = 'rgb(0 0 0 / 20%)';
  toggleIcon.children[0].classList.remove('fa-sun');
  toggleIcon.children[0].classList.add('fa-moon');
  mainImage.src = 'images/main-dark.svg';
  project1_Img.src = 'images/proj-images/000/main.jpeg';
  project2_Img.src = 'images/proj-images/001/main.jpeg';
  project3_Img.src = 'images/proj-images/002/main.jpeg';
  project4_Img.src = 'images/proj-images/003/main.jpeg';
  project5_Img.src = 'images/proj-images/004/main.jpeg';
  project6_Img.src = 'images/proj-images/005/main.jpeg';
  project7_Img.src = 'images/proj-images/006/main.jpeg';
}

function lightMode() {
  nav.style.background = 'rgb(255 255 255 / 80%)';
  toggleIcon.children[0].classList.remove('fa-moon');
  toggleIcon.children[0].classList.add('fa-sun');
  mainImage.src = 'images/main.svg';
  project1_Img.src = 'images/proj-images/000/main-light.jpg';
  project2_Img.src = 'images/proj-images/001/main-light.jpg';
  project3_Img.src = 'images/proj-images/002/main-light.jpg';
  project4_Img.src = 'images/proj-images/003/main-light.jpg';
  project5_Img.src = 'images/proj-images/004/main-light.jpg';
  project6_Img.src = 'images/proj-images/005/main-light.jpg';
  project7_Img.src = 'images/proj-images/006/main-light.jpg';
}

function switchTheme(evt) {
  if (evt.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
    darkMode();
    localStorage.setItem('portfolio-theme', 'dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    lightMode();
    localStorage.setItem('portfolio-theme', 'light');
  }
}

// Event listener on Toggle switch
toggleSwitch.addEventListener('change', switchTheme);

const currentTheme = localStorage.getItem('portfolio-theme');
if (currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme);
  currentTheme === 'dark' ? darkMode() : lightMode();
}
