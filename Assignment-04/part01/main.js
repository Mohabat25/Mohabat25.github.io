 //Name: Mohabatjit Singh
 //File: Part1.html 
 //Date: 31 July 2025 
 //JAVASCRIPT silly story generator.

const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

const insertX = ['Bhoothnath', 'Mighty star', 'Jannat'];
const insertY = ['wonderland', 'Chennai Express', 'Black Hole'];
const insertZ = ['Brahmaa', 'Street King', 'Race'];

function randomValueFromArray(array) {
  const random = Math.floor(Math.random() * array.length);
  return array[random];
}

randomize.addEventListener('click', result);

function result() {
  let newStory =
    'It was 94 fahrenheit outside, so :insertx: went for a walk. ' +
    'When they got to :inserty:, they stared in horror for a few moments, then :insertz:. ' +
    'Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';

  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);

  newStory = newStory.replace(/:insertx:/g, xItem);
  newStory = newStory.replace(':inserty:', yItem);
  newStory = newStory.replace(':insertz:', zItem);

  if (customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace('Bob', name);
  }

  if (document.getElementById('uk').checked) {
    const weight = Math.round(300 * 0.0714286) + ' stone';
    const temperature = Math.round((94 - 32) * (5 / 9)) + ' centigrade';
    newStory = newStory.replace('94 fahrenheit', temperature);
    newStory = newStory.replace('300 pounds', weight);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
