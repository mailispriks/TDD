function isUpperCase(str) {
  return str === str.toUpperCase();
}

const greet = (name) => {
  let correctName = null
  if (Array.isArray(name)) {
    if (name.length === 2) {
      correctName = isUpperCase(name.join()) ? name.join(' AND ') : name.join(' and ')
    } else {
      const allNames = name.join(', ')
      const last = name.pop();
      correctName = allNames.replace(last, ('and ' + last))
    }
  } else {
    correctName = name || 'my friend'
  }
  return isUpperCase(correctName) ? `HELLO ${correctName}!` : `Hello, ${correctName}.`
} 

module.exports = greet
