/* eslint-disable no-alert */

import { decode, encode } from './cipher';

export default function start(letters) {
  do {
    const type = prompt('Hvort viltu kóða eða afkóða streng?') || '';
    const typeLowered = type.toLocaleLowerCase();

    if (typeLowered !== 'kóða' && typeLowered !== 'afkóða') {
      alert(`Veit ekki hvaða aðgerð „${type}“ er. Reyndu aftur.`);
      continue;
    }

    const nInput = prompt('Hversu mikið á að hliðra streng?');
    const n = Number.parseInt(nInput, 10);
    if (!Number.isInteger(n) || n < 1 || n > letters.length - 1) {
      alert(`${nInput} er ekki rétt. Reyndu aftur.`);
      continue;
    }

    const str = prompt('Gefðu upp strenginn sem á að hliðra:');

    if (!str || str.length === 0) {
      alert('Þú gafst ekki upp streng. Reyndu aftur.');
      continue;
    }

    const invalid = [];
    for (let i = 0; i < str.length; i++) {
      const letter = (str[i] || '').toLocaleUpperCase();
      if (letters.indexOf(letter) < 0) {
        invalid.push(letter);
      }
    }

    if (invalid.length > 0) {
      alert(`Þú gafst upp ólöglega stafi: ${invalid.join(', ')}.`);
      continue;
    }

    let result = '';
    if (typeLowered === 'kóða') {
      result = encode(str, n, letters);
    } else {
      result = decode(str, n, letters);
    }

    alert(`Niðurstaða:\n${result}`);

  // eslint-disable-next-line no-restricted-globals
  } while (confirm('Aftur?'));
}
