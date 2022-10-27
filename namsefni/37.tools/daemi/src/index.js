// Grunnskrá sem vírar saman virkni

import { encode } from './cipher';
import ui from './ui';

const LETTERS = 'AÁBDÐEÉFGHIÍJKLMNOÓPRSTUÚVXYÝÞÆÖ';

// erum ekki að nota async await, en með því að merkja fallið sem async
// mun babel innifela kóða til að láta virka og stækka bundle helling
document.addEventListener('DOMContentLoaded', async () => {
  console.log(encode('HALLÓ', 3, LETTERS));
  ui(LETTERS);
});
