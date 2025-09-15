const hOne = document.getElementById('heading'), paragraph = document.createElement('p'), x = 2;
const testClass = document.getElementsByClassName('tests');
const h = document.getElementsByClassName('h')[0];

testClass[2].innerHTML = '<h1>This is a test class</h1>';
paragraph.textContent = 'camelCasing';
h.textContent = 'This is h class';

hOne.appendChild(paragraph);

hOne.appendChild(paragraph);
hOne.appendChild(paragraph);
hOne.style.backgroundColor = 'lightblue'; 