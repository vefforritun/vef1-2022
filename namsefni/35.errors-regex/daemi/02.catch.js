function throws() {
  throw Error('Villa!');
}

try {
  throws();
} catch (e) {
  console.log('Greip villu!', e);
}
console.log('Ég keyri!');
