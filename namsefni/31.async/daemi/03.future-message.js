function futureMessage(msg) {
  return new Promise((resolve, reject) => {
    if (msg === 'foo') {
      reject(new Error('No foo allowed!'));
    }

    setTimeout(() => resolve(`${msg} from the future!`), 2000);
  });
}

futureMessage('Hi!')
  .then((msg) => console.log(msg));
// "Hi! from the future!" eftir 2 sek

futureMessage('foo')
  .then((msg) => console.log(msg))
  .catch((e) => console.log(e));
// "No foo allowed!" strax

const p = futureMessage('hmm');

/**
 * Fall sem tekur við promise og bætir við `then` handler
 */
function foo(promise) {
  console.log(promise);

  // Þetta mun prenta út í console *seinna*
  promise.then((msg) => console.log('foo:', msg));

  // skilum þessu *núna*
  return 'Handling promise...';
}

foo(p);
