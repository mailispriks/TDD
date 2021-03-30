function isUpperCase(str) {
  return str === str.toUpperCase();
}

const greet = (name) => {
  let correctName = null
  if (Array.isArray(name)) {
    correctName = isUpperCase(name.join()) ? name.join(' AND ') : name.join(' and ')
  } else {
    correctName = name || 'my friend'
  }
  return isUpperCase(correctName) ? `HELLO ${correctName}!` : `Hello, ${correctName}.`
} 

module.exports = greet
