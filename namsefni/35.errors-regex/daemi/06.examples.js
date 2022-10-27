/halló/.test('halló heimur');
/hæ/.test('halló heimur');

const str = 'The Quick Brown Fox Jumps Over The Lazy Dog';

const re = /quick\s(brown).+?(jumps)/ig;
const result = re.exec(str);

console.log(result);

const match = str.match(/quick\s(brown).+?(jumps)/ig);

console.log(match);

const replace = 'hæ hæ, hvað segiru? bæ!'.replace(/(h|b)æ/g, 'lol');

console.log(replace);
