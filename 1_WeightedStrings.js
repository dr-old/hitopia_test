function getCharWeight(char) {
  return char.charCodeAt(0) - 'a'.charCodeAt(0) + 1;
}

function weightedStrings(s, queries) {
  const weights = new Set();
  
  let i = 0;
  while (i < s.length) {
    const char = s[i];
    const weight = getCharWeight(char);
    let count = 1;
    
    while (i + 1 < s.length && s[i + 1] === char) {
      count++;
      i++;
    }
    
    for (let j = 1; j <= count; j++) {
      weights.add(weight * j);
    }
    
    i++;
  }
  
  return queries.map(query => weights.has(query) ? "Yes" : "No");
}

const s = "abbcccd";
const queries = [1, 3, 9, 8];
console.log(weightedStrings(s, queries));
