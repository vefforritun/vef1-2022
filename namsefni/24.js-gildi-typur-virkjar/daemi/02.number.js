console.log(1.25);

console.log(0.2 + 0.1); // 0.30000000000000004

console.log(1.25e6); // 1.25 * 10^6 = 1250000

console.log(9e999); // Infinity

console.log(1 / 0); // Infinity

console.log(10 % 2); // = 0, jöfntala skilar alltaf 0

console.log(11 % 2); // = 1, oddatala skilar alltaf 1

console.log(5 * 10 + 2); // 52

console.log(5 * (10 + 2)); // 60

console.log(0 / 0); // NaN

console.log(1 - 'a'); // NaN

// BigInt

// ** er „hafið í veldi“ virki, jafngilt 2^100
console.log(2 ** 100); // 1.2676506002282294e+30

// Með BigInt fáum við töluna, ekki sem scientific
console.log(2n ** 100n); // 1267650600228229401496703205376n

// Getum ekki blandað number og BigInt
console.log(2n ** 100);
// Uncaught TypeError: can't convert BigInt to number


// Föll á Number, primitive wrapper fyrir Number

console.log(Number.isNaN(1)); // false

console.log(Number.isNaN('a')); // true

console.log(Number.isNaN('1'));// false

console.log(Number.isFinite(1)); // true

console.log(Number.isFinite(1 / 0)); // false

console.log(Number.parseInt('0100', 10)); // 100

console.log(Number.parseInt('a100', 10)); // NaN

console.log(Number.parseInt('0100a', 10)); // 100

console.log(Number.parseInt('0100', 2)); // 4

console.log(Number.parseInt('ff', 16)); // 255

console.log(Number.parseFloat('100.123')); // 100.123

console.log(100.66.toFixed(1)); // 100.7
