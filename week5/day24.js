console.log('DOM Manipulation Demo Started');

document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM fully loaded');
});


const mainTitle = document.getElementById('mainTitle');
const demoText = document.querySelector('#demoText');
const changeTextBtn = document.querySelector('#changeText');
const testList = document.querySelector('#testList');
const itemCount = document.querySelector('#itemCount');

console.log('Elements found:', {
  title: !!mainTitle,
  text: !!demoText,
  buttons: !!changeTextBtn,
  list: !!testList
});

changeTextBtn.addEventListener('click', () => {
  console.log('Change text button clicked');

  const messages = [
  'Text updated: this is how dynamic content works',
  'Text changed successfully',
  'Perfect for automation testing',
  'I think I get it now'
];

const randomMessage = messages[Math.floor(Math.random() * messages.length)];

demoText.textContent = randomMessage;
});

const addBtn = document.querySelector('#addElement');

addBtn.addEventListener('click', () => {
  const item = document.createElement('li');
  item.textContent = 'New test item';
  testList.appendChild(item);
  const count = testList.querySelectorAll('li').length;
  itemCount.textContent = `Item count: ${count}`;
  console.log('Item count:', count);
});
//Before: 1. After one click: 2. Expected versus actual.

