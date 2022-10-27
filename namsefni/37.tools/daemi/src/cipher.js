import { ShiftCipher } from 'shift-cipher';

export function decode(str, n, alphabet) {
  const cipher = new ShiftCipher();

  cipher.makeCipherMap({
    chars: alphabet,
    shift: n,
  });

  return cipher.decode(str.toLocaleUpperCase());
}

export function encode(str, n, alphabet) {
  const cipher = new ShiftCipher();

  cipher.makeCipherMap({
    chars: alphabet,
    shift: n,
  });

  return cipher.encode(str.toLocaleUpperCase());
}
