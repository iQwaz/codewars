function alphabetPosition(text) {
  const alfabet = 'abcdefghijklmnopqrstuvwxyz';
  let result = '';
  for (let i = 0; i < text.length; i += 1) {
    const textLowerCase = text.toLowerCase();
    if (alfabet.indexOf(textLowerCase[i]) !== -1) {
      result += alfabet.indexOf(textLowerCase[i]) + 1;
      result += ' ';
    }
  }
  return result.trim();
}

console.log(alphabetPosition("The sunset sets at twelve o' clock.")); // "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"
