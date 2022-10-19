// snoozea í 5s, síðan 3s og að lokum 1s
setTimeout(() => {
  alert('Vakna!');
  setTimeout(() => {
    alert('Vakna núna!');
    setTimeout(() => {
      alert('VAKNA!!');
    }, 1000);
  }, 3000);
}, 5000);

function snooze(s, msg, callback) {
  setTimeout(() => {
    alert(msg);
    if (callback) {
      callback();
    }
  }, 1000 * s);
}

snooze(5, 'Vakna', () => {
  snooze(3, 'Vakna núna!', () => {
    snooze(1, 'VAKNA!!');
  });
});
