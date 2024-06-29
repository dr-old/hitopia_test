function isBalanced(bracketString) {
  const stack = [];
  const bracketPairs = {
    ')': '(',
    ']': '[',
    '}': '{'
  };

  for (const char of bracketString) {
    if (char === '(' || char === '[' || char === '{') {
      stack.push(char);
    } else if (char === ')' || char === ']' || char === '}') {
      if (stack.length === 0 || stack.pop() !== bracketPairs[char]) {
        return "NO";
      }
    }
  }

  return stack.length === 0 ? "YES" : "NO";
}

console.log(isBalanced("{ [ ( ) ] }"));
console.log(isBalanced("{ [ ( ] ) }"));
console.log(isBalanced("{ ( ( [ ] ) [ ] ) [ ] }"));
