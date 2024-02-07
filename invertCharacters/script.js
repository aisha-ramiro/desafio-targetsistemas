function invertCharacters(string) {
  let value = '';
  for (let i = string.length - 1; i >= 0; i--) {
    value += string[i];
  }
  return value;
}

const newValue = 'Target Sistemas!';

const newString = invertCharacters(newValue);
console.log('Resultado dos caracteres invertidos:', newString);
