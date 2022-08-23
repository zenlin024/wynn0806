let progressBar = document.querySelector(".circular-progress");
let valueContainer = document.querySelector(".value-container");

let progressValue = 0;
let progressEndValue = 30;
let speed = 20;

let progress = setInterval(() => {
  progressValue++;
  valueContainer.textContent = `${progressValue}`;
  progressBar.style.background = `conic-gradient(
      #1b89e2 ${progressValue * 3.6}deg,
      #cadcff ${progressValue * 3.6}deg
  )`;
  if (progressValue == progressEndValue) {
    clearInterval(progress);
  }
}, speed);


// two

let progressBarTwo = document.querySelector(".circular-progress.two");
let valueContainerTwo = document.querySelector(".value-container.two");

let progressValueTwo = 5;
let progressEndValueTwo = 90;
let speedTwo = 20;


let progressTwo = setInterval(() => {
    progressValueTwo++;
    valueContainerTwo.textContent = `${progressValueTwo}`;
    progressBarTwo.style.background = `conic-gradient(
        #1b89e2 ${progressValueTwo * 3.6}deg,
        #cadcff ${progressValueTwo * 3.6}deg
    )`;
    if (progressValueTwo == progressEndValueTwo) {
      clearInterval(progressTwo);
    }
  }, speed);


// three

let progressBarThree = document.querySelector(".circular-progress.three");
let valueContainerThree = document.querySelector(".value-container.three");

let progressValueThree = 5;
let progressEndValueThree = 50;
let speedThree = 20;

let progressThree = setInterval(() => {
    progressValueThree++;
    valueContainerThree.textContent = `${progressValueThree}`;
    progressBarThree.style.background = `conic-gradient(
        #1b89e2 ${progressValueThree * 3.6}deg,
        #cadcff ${progressValueThree * 3.6}deg
    )`;
    if (progressValueThree == progressEndValueThree) {
      clearInterval(progressThree);
    }
  }, speed);


  
// four

let progressBarFour = document.querySelector(".circular-progress.four");
let valueContainerFour = document.querySelector(".value-container.four");

let progressValueFour = 5;
let progressEndValueFour = 60;
let speedFour = 20;

let progressFour = setInterval(() => {
    progressValueFour++;
    valueContainerFour.textContent = `${progressValueFour}`;
    progressBarFour.style.background = `conic-gradient(
        #1b89e2 ${progressValueFour * 3.6}deg,
        #cadcff ${progressValueFour * 3.6}deg
    )`;
    if (progressValueFour == progressEndValueFour) {
      clearInterval(progressFour);
    }
  }, speed);