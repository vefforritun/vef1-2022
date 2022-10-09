const a = new Date(); // Núna

const b = new Date(2022, 0, 1, 0, 0, 0);

const until = b - a; // í millisekúndum

//                   ms     sek  mín  klst
const days = until / 1000 / 60 / 60 / 24;

console.log(`${days.toFixed(0)} dagar þangað til 1. jan 2022`);
