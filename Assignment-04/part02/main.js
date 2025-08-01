// Name: Mohabatjit Singh
// File: main.js
// Date: 1 August 2025
// JavaScript for the interactive image gallery
const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');
const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

const images = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];
const altTexts = {
  'pic1.jpg': 'Closeup of a human eye',
  'pic2.jpg': 'Mountain landscape',
  'pic3.jpg': 'City skyline at night',
  'pic4.jpg': 'Forest trail',
  'pic5.jpg': 'Snowy cabin in woods'
};
images.forEach(filename => {
const newImage = document.createElement('img');
newImage.setAttribute('src', `images/${filename}`);
newImage.setAttribute('alt', altTexts[filename]);
thumbBar.appendChild(newImage);
newImage.addEventListener('click', () => {
    displayedImage.src = newImage.src;
    displayedImage.alt = newImage.alt;
  });
});
btn.addEventListener('click', () => {
  if (btn.className === 'dark') {
    btn.className = '';
    btn.textContent = 'Darken';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0)';
  } else {
    btn.className = 'dark';
    btn.textContent = 'Lighten';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
  }
});
