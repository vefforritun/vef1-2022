function makeAdder(x) {
  // þetta fall hefur alltaf aðgang að x
  return (y) => x + y;
}

const add5 = makeAdder(5);

console.log(add5(1)); // 6

function outer(a) {
  const x = 1;
  function inner(b) {
    const y = 2;
    function innerinner(c) {
      const z = 3;
      return x + y + z + c;
    }
    return innerinner(b);
  }
  return inner(a);
}

console.log(outer(10)); // 16
