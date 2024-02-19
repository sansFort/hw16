// Завдання 1
let time = 1; // хвилин

const form = document.createElement('form');
document.body.appendChild(form);

const input = document.createElement('input');
input.type = 'number';
input.value = time;
form.appendChild(input);

let intervalId;

function notify() {
  alert(`Час розім'ятися, Ви працюєте ${time} хвилин!`); 
}

input.addEventListener('change', () => {
  time = parseInt(input.value);
  clearInterval(intervalId);
  intervalId = setInterval(notify, time * 60 * 1000); 
});

intervalId = setInterval(notify, time * 60 * 1000);


// Завдання 2
const button = document.createElement('button');
button.textContent = 'Зупинити лічильник';
document.body.appendChild(button);

button.addEventListener('click', () => {
  clearInterval(intervalId);
});


// Завдання 3
const progress = document.createElement('progress');
progress.max = 100;
document.body.appendChild(progress);

let progressValue = 0;

setInterval(() => {
  progress.value = progressValue++;
  if (progressValue > 100) {
    progressValue = 0; 
  }
}, 1000);