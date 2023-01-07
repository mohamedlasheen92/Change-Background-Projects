// Change Header
let firstBtn = document.getElementsByTagName('button')[0];
let header = document.getElementsByTagName('header')[0];
let introText = document.querySelector('header h2.text');

const getHsl = () => {
  let getSandL = Math.round(Math.random() * 100);
  let getH = Math.round(Math.random() * 360);
  return `hsl(${getH}, ${getSandL}%, ${getSandL}%)`;
}
firstBtn.addEventListener('click', function () {
  let mainC = getHsl();
  header.style.backgroundColor = mainC;
  introText.style.color = mainC;
})

// Change Titles
let targetTitle = document.querySelectorAll('.title-container > div:not(:first-child)');
let bgTitleBtn = document.querySelector('.flex .change-bt');
let ctTitleBtn = document.querySelector('.flex #change-ct');
bgTitleBtn.addEventListener('click', () => {
  let specific = getHsl();
  targetTitle.forEach(function (item) {
    item.style.setProperty('background-color', specific);
  })
})
ctTitleBtn.addEventListener('click', () => {
  let specific = getHsl();
  targetTitle.forEach(function (item) {
    item.style.cssText = `color: ${specific};`;
  })
})
// Change Sections BG
const changeSecBtn = document.getElementById('change-sec');
const coolers = ['2a9d8f', 'e9c46a', 'e76f51', 'caf0f8'];
const sections = document.querySelectorAll('.sec');
// Change Sections BG Sequence

let itemIndx = 0;

changeSecBtn.addEventListener('click', () => {
  if (itemIndx == coolers.length) itemIndx = 0;
  
  sections.forEach(sec => {
    sec.style.setProperty('background-color', `#${coolers[itemIndx]}`);
  });
  itemIndx++;
})
// Change Sections BG [ Random ]
/*
changeSecBtn.addEventListener('click', () => {
  const target = Math.floor(Math.random() * coolers.length);
  console.log(target);
  sections.forEach(sec => {
    sec.style.setProperty('background-color', `#${coolers[target]}`);
  });
})
*/







