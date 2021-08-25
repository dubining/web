function convertToRoman(num) {
  let basicSymbols = {'M':1000, 'CM':900, 'D':500, 'CD':400, 'C':100, 'XC':90, 'L':50, 'XL':40, 'X':10, 'IX':9, 'V':5, 'IV':4, 'I':1};
  let result = '';
  for (let i of Object.keys(basicSymbols)) {
    let amount = Math.floor(num / basicSymbols[i]);
    result += i.repeat(amount);
    num -= amount * basicSymbols[i];
  }
  return result;
}