function rot13(str) {
  return str.split('').map(char => (char.match(/[A-Z]/) ? String.fromCharCode(char.charCodeAt(0) >= 78 ? char.charCodeAt(0) - 13 : char.charCodeAt(0) + 13) : char)).join('');
}