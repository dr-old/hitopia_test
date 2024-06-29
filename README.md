## Balanced Brackets Algorithm

### Problem Statement

Determine whether a string of brackets is balanced. A balanced string of brackets consists of pairs of opening and closing brackets, where each opening bracket has a corresponding closing bracket of the same type, and the brackets are nested properly.

### Implementation

The algorithm uses a stack-based approach to check for balanced brackets. Here is the implementation in JavaScript:

```javascript
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
