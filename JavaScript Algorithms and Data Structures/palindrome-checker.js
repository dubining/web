function palindrome(str) {
  let cleanChars = str.replace(/[\W_]/g, '').toLowerCase().split('');
  return cleanChars.toString() == cleanChars.reverse().toString();
}