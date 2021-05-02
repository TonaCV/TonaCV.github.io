
const parent1 = document.getElementById('content1');
const flip1 = document.getElementById('content1_card');
const parent2 = document.getElementById('content2');
const flip2 = document.getElementById('content2_card');
const parent3 = document.getElementById('content3');
const flip3 = document.getElementById('content3_card');
const parent4 = document.getElementById('content4');
const flip4 = document.getElementById('content4_card');


parent1.addEventListener('mouseenter', e => {
  flip1.style.transform = 'rotateY(180deg)';
});

parent1.addEventListener('mouseleave', e => {
  flip1.style.transform = 'rotateY(0deg)';
});

parent2.addEventListener('mouseenter', e => {
  flip2.style.transform = 'rotateY(180deg)';
});

parent2.addEventListener('mouseleave', e => {
  flip2.style.transform = 'rotateY(0deg)';
});

parent3.addEventListener('mouseenter', e => {
  flip3.style.transform = 'rotateY(180deg)';
});

parent3.addEventListener('mouseleave', e => {
  flip3.style.transform = 'rotateY(0deg)';
});

parent4.addEventListener('mouseenter', e => {
  flip4.style.transform = 'rotateY(180deg)';
});

parent4.addEventListener('mouseleave', e => {
  flip4.style.transform = 'rotateY(0deg)';
});

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

anime({
  targets: '.cube1',
  keyframes: [
      {translateY: getRndInteger(-((screen.height/2)-100), (screen.height/2)-100)},
      {translateX: getRndInteger(-((screen.width/2)-100), (screen.width/2)-100)},
      {translateY: getRndInteger(-((screen.height/2)-100), (screen.height/2)-100)},
      {translateX: getRndInteger(-((screen.width/2)-100), (screen.width/2)-80)},
      {translateY: getRndInteger(-((screen.height/2)-100), (screen.height/2)-100)},
      {translateX: getRndInteger(-((screen.width/2)-100), (screen.width/2)-100)},
  ],
  rotateZ:360,
  duration:5000,
  loop:true,
  direction:'alternate',
  easing:'linear'
});

anime({
  targets: '.cube2',
  keyframes: [
      {translateY: getRndInteger(-((screen.height/2)-100), (screen.height/2)-100)},
      {translateX: getRndInteger(-((screen.width/2)-100), (screen.width/2)-100)},
      {translateY: getRndInteger(-((screen.height/2)-100), (screen.height/2)-100)},
      {translateX: getRndInteger(-((screen.width/2)-100), (screen.width/2)-80)},
      {translateY: getRndInteger(-((screen.height/2)-100), (screen.height/2)-100)},
      {translateX: getRndInteger(-((screen.width/2)-100), (screen.width/2)-100)},
  ],
  rotateZ:360,
  duration:5000,
  loop:true,
  direction:'alternate',
  easing:'linear'
});

anime({
  targets: '.cube3',
  keyframes: [
      {translateY: getRndInteger(-((screen.height/2)-100), (screen.height/2)-100)},
      {translateX: getRndInteger(-((screen.width/2)-100), (screen.width/2)-100)},
      {translateY: getRndInteger(-((screen.height/2)-100), (screen.height/2)-100)},
      {translateX: getRndInteger(-((screen.width/2)-100), (screen.width/2)-80)},
      {translateY: getRndInteger(-((screen.height/2)-100), (screen.height/2)-100)},
      {translateX: getRndInteger(-((screen.width/2)-100), (screen.width/2)-100)},
  ],
  rotateZ:360,
  duration:5000,
  loop:true,
  direction:'alternate',
  easing:'linear'
});

anime({
  targets: '.cube4',
  keyframes: [
      {translateY: getRndInteger(-((screen.height/2)-100), (screen.height/2)-100)},
      {translateX: getRndInteger(-((screen.width/2)-100), (screen.width/2)-100)},
      {translateY: getRndInteger(-((screen.height/2)-100), (screen.height/2)-100)},
      {translateX: getRndInteger(-((screen.width/2)-100), (screen.width/2)-80)},
      {translateY: getRndInteger(-((screen.height/2)-100), (screen.height/2)-100)},
      {translateX: getRndInteger(-((screen.width/2)-100), (screen.width/2)-100)},
  ],
  rotateZ:360,
  duration:5000,
  loop:true,
  direction:'alternate',
  easing:'linear'
});

anime({
  targets: '.cube5',
  keyframes: [
      {translateY: getRndInteger(-((screen.height/2)-100), (screen.height/2)-100)},
      {translateX: getRndInteger(-((screen.width/2)-100), (screen.width/2)-100)},
      {translateY: getRndInteger(-((screen.height/2)-100), (screen.height/2)-100)},
      {translateX: getRndInteger(-((screen.width/2)-100), (screen.width/2)-80)},
      {translateY: getRndInteger(-((screen.height/2)-100), (screen.height/2)-100)},
      {translateX: getRndInteger(-((screen.width/2)-100), (screen.width/2)-100)},
  ],
  rotateZ:360,
  duration:5000,
  loop:true,
  direction:'alternate',
  easing:'linear'
});

anime({
  targets: '.cube6',
  keyframes: [
      {translateY: getRndInteger(-((screen.height/2)-100), (screen.height/2)-100)},
      {translateX: getRndInteger(-((screen.width/2)-100), (screen.width/2)-100)},
      {translateY: getRndInteger(-((screen.height/2)-100), (screen.height/2)-100)},
      {translateX: getRndInteger(-((screen.width/2)-100), (screen.width/2)-80)},
      {translateY: getRndInteger(-((screen.height/2)-100), (screen.height/2)-100)},
      {translateX: getRndInteger(-((screen.width/2)-100), (screen.width/2)-100)},
  ],
  rotateZ:360,
  duration:5000,
  loop:true,
  direction:'alternate',
  easing:'linear'
});

anime({
  targets: '.cube7',
  keyframes: [
      {translateY: getRndInteger(-((screen.height/2)-100), (screen.height/2)-100)},
      {translateX: getRndInteger(-((screen.width/2)-100), (screen.width/2)-100)},
      {translateY: getRndInteger(-((screen.height/2)-100), (screen.height/2)-100)},
      {translateX: getRndInteger(-((screen.width/2)-100), (screen.width/2)-80)},
      {translateY: getRndInteger(-((screen.height/2)-100), (screen.height/2)-100)},
      {translateX: getRndInteger(-((screen.width/2)-100), (screen.width/2)-100)},
  ],
  rotateZ:360,
  duration:5000,
  loop:true,
  direction:'alternate',
  easing:'linear'
});

anime({
  targets: '.cube8',
  keyframes: [
      {translateY: getRndInteger(-((screen.height/2)-100), (screen.height/2)-100)},
      {translateX: getRndInteger(-((screen.width/2)-100), (screen.width/2)-100)},
      {translateY: getRndInteger(-((screen.height/2)-100), (screen.height/2)-100)},
      {translateX: getRndInteger(-((screen.width/2)-100), (screen.width/2)-80)},
      {translateY: getRndInteger(-((screen.height/2)-100), (screen.height/2)-100)},
      {translateX: getRndInteger(-((screen.width/2)-100), (screen.width/2)-100)},
  ],
  rotateZ:360,
  duration:5000,
  loop:true,
  direction:'alternate',
  easing:'linear'
});

anime({
  targets: '.cube9',
  keyframes: [
      {translateY: getRndInteger(-((screen.height/2)-100), (screen.height/2)-100)},
      {translateX: getRndInteger(-((screen.width/2)-100), (screen.width/2)-100)},
      {translateY: getRndInteger(-((screen.height/2)-100), (screen.height/2)-100)},
      {translateX: getRndInteger(-((screen.width/2)-100), (screen.width/2)-80)},
      {translateY: getRndInteger(-((screen.height/2)-100), (screen.height/2)-100)},
      {translateX: getRndInteger(-((screen.width/2)-100), (screen.width/2)-100)},
  ],
  rotateZ:360,
  duration:5000,
  loop:true,
  direction:'alternate',
  easing:'linear'
});

anime({
  targets: '.cube10',
  keyframes: [
      {translateY: getRndInteger(-((screen.height/2)-100), (screen.height/2)-100)},
      {translateX: getRndInteger(-((screen.width/2)-100), (screen.width/2)-100)},
      {translateY: getRndInteger(-((screen.height/2)-100), (screen.height/2)-100)},
      {translateX: getRndInteger(-((screen.width/2)-100), (screen.width/2)-80)},
      {translateY: getRndInteger(-((screen.height/2)-100), (screen.height/2)-100)},
      {translateX: getRndInteger(-((screen.width/2)-100), (screen.width/2)-100)},
  ],
  rotateZ:360,
  duration:5000,
  loop:true,
  direction:'alternate',
  easing:'linear'
});

anime({
  targets: '.cube11',
  keyframes: [
      {translateY: getRndInteger(-((screen.height/2)-100), (screen.height/2)-100)},
      {translateX: getRndInteger(-((screen.width/2)-100), (screen.width/2)-100)},
      {translateY: getRndInteger(-((screen.height/2)-100), (screen.height/2)-100)},
      {translateX: getRndInteger(-((screen.width/2)-100), (screen.width/2)-80)},
      {translateY: getRndInteger(-((screen.height/2)-100), (screen.height/2)-100)},
      {translateX: getRndInteger(-((screen.width/2)-100), (screen.width/2)-100)},
  ],
  rotateZ:360,
  duration:5000,
  loop:true,
  direction:'alternate',
  easing:'linear'
});

anime({
  targets: '.cube12',
  keyframes: [
      {translateY: getRndInteger(-((screen.height/2)-100), (screen.height/2)-100)},
      {translateX: getRndInteger(-((screen.width/2)-100), (screen.width/2)-100)},
      {translateY: getRndInteger(-((screen.height/2)-100), (screen.height/2)-100)},
      {translateX: getRndInteger(-((screen.width/2)-100), (screen.width/2)-80)},
      {translateY: getRndInteger(-((screen.height/2)-100), (screen.height/2)-100)},
      {translateX: getRndInteger(-((screen.width/2)-100), (screen.width/2)-100)},
  ],
  rotateZ:360,
  duration:5000,
  loop:true,
  direction:'alternate',
  easing:'linear'
});

anime({
  targets: '.cube13',
  keyframes: [
      {translateY: getRndInteger(-((screen.height/2)-100), (screen.height/2)-100)},
      {translateX: getRndInteger(-((screen.width/2)-100), (screen.width/2)-100)},
      {translateY: getRndInteger(-((screen.height/2)-100), (screen.height/2)-100)},
      {translateX: getRndInteger(-((screen.width/2)-100), (screen.width/2)-80)},
      {translateY: getRndInteger(-((screen.height/2)-100), (screen.height/2)-100)},
      {translateX: getRndInteger(-((screen.width/2)-100), (screen.width/2)-100)},
  ],
  rotateZ:360,
  duration:5000,
  loop:true,
  direction:'alternate',
  easing:'linear'
});

anime({
  targets: '.cube14',
  keyframes: [
      {translateY: getRndInteger(-((screen.height/2)-100), (screen.height/2)-100)},
      {translateX: getRndInteger(-((screen.width/2)-100), (screen.width/2)-100)},
      {translateY: getRndInteger(-((screen.height/2)-100), (screen.height/2)-100)},
      {translateX: getRndInteger(-((screen.width/2)-100), (screen.width/2)-80)},
      {translateY: getRndInteger(-((screen.height/2)-100), (screen.height/2)-100)},
      {translateX: getRndInteger(-((screen.width/2)-100), (screen.width/2)-100)},
  ],
  rotateZ:360,
  duration:5000,
  loop:true,
  direction:'alternate',
  easing:'linear'
});

anime({
  targets: '.cube15',
  keyframes: [
      {translateY: getRndInteger(-((screen.height/2)-100), (screen.height/2)-100)},
      {translateX: getRndInteger(-((screen.width/2)-100), (screen.width/2)-100)},
      {translateY: getRndInteger(-((screen.height/2)-100), (screen.height/2)-100)},
      {translateX: getRndInteger(-((screen.width/2)-100), (screen.width/2)-80)},
      {translateY: getRndInteger(-((screen.height/2)-100), (screen.height/2)-100)},
      {translateX: getRndInteger(-((screen.width/2)-100), (screen.width/2)-100)},
  ],
  rotateZ:360,
  duration:5000,
  loop:true,
  direction:'alternate',
  easing:'linear'
});

anime({
  targets: '.cube16',
  keyframes: [
      {translateY: getRndInteger(-((screen.height/2)-100), (screen.height/2)-100)},
      {translateX: getRndInteger(-((screen.width/2)-100), (screen.width/2)-100)},
      {translateY: getRndInteger(-((screen.height/2)-100), (screen.height/2)-100)},
      {translateX: getRndInteger(-((screen.width/2)-100), (screen.width/2)-80)},
      {translateY: getRndInteger(-((screen.height/2)-100), (screen.height/2)-100)},
      {translateX: getRndInteger(-((screen.width/2)-100), (screen.width/2)-100)},
  ],
  rotateZ:360,
  duration:5000,
  loop:true,
  direction:'alternate',
  easing:'linear'
});
