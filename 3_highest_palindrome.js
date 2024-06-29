function highestPalindrome(s, k) {
  const n = s.length;
  const chars = s.split('');
  const changes = Array(n).fill(0);

  function makePalindrome(l, r, k) {
    if (l >= r) return k;

    if (chars[l] !== chars[r]) {
      const maxChar = Math.max(chars[l], chars[r]);
      chars[l] = chars[r] = maxChar;
      changes[l] = changes[r] = 1;
      return makePalindrome(l + 1, r - 1, k - 1);
    } else {
      return makePalindrome(l + 1, r - 1, k);
    }
  }

  function maximizePalindrome(l, r, k) {
    if (l > r) return;

    if (chars[l] !== '9') {
      if (changes[l] === 1 || changes[r] === 1) {
        if (k >= 1) {
          chars[l] = chars[r] = '9';
          maximizePalindrome(l + 1, r - 1, k - 1);
        }
      } else {
        if (k >= 2) {
          chars[l] = chars[r] = '9';
          maximizePalindrome(l + 1, r - 1, k - 2);
        } else {
          maximizePalindrome(l + 1, r - 1, k);
        }
      }
    } else {
      maximizePalindrome(l + 1, r - 1, k);
    }
  }

  const remainingChanges = makePalindrome(0, n - 1, k);

  if (remainingChanges < 0) return '-1';

  maximizePalindrome(0, n - 1, remainingChanges);

  return chars.join('');
}

console.log(highestPalindrome('3943', 1));
console.log(highestPalindrome('932239', 2));
