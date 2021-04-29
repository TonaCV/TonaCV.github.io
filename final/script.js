
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
