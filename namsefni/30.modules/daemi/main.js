import defaultExport, { message, calculate } from './lib/calculator.js';

// Breytur sem við skilgreinum hér eru í scope fyrir module, _ekki_ global scope
let sum = 1;

console.log('Frá ./lib/calculator.js:', defaultExport, message);

// Getum átt við DOM hér án þess að bíða eftir að það sé tilbúið
// því við notum <script type="module">
const button = document.createElement('button');
button.addEventListener('click', () => {
  sum += calculate(sum, 1);
  console.log(sum);
});
button.textContent = 'Reikna';

document.body.appendChild(button);
