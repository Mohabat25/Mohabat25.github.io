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

const newImage = document.createElement('img');
newImage.setAttribute('src', xxx);
newImage.setAttribute('alt', xxx);
thumbBar.appendChild(newImage);

