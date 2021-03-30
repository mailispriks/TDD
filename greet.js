function isUpperCase(str) {
  return str === str.toUpperCase();
}

const greet = (name) => {
  let correctName = null
  if (Array.isArray(name)) {
    let str = ''
    let normalNames = [] // Amy, Charlotte
    let shoutingNames = [] // BRIAN

    for (const n of name) {
      isUpperCase(n) ? shoutingNames.push(n) : normalNames.push(n)
    }

    if (normalNames.length > 0) {
      if (normalNames.length === 2) {
        str = `Hello, ${normalNames.join(' and ')}.`
      } else {
        const allNames = normalNames.join(', ')
        const last = normalNames.pop()
        str = `Hello, ${allNames.replace(last, ('and ' + last))}.`
      }
    }
    if (shoutingNames.length > 0) {
      if (normalNames.length === 0) {
        str = `HELLO ${shoutingNames.join(' AND ')}!`
      } else {
        str += ` AND HELLO ${shoutingNames.join(' AND ')}!`
      }
    }
    return str
  } else {
    correctName = name || 'my friend'
  }
  return isUpperCase(correctName) ? `HELLO ${correctName}!` : `Hello, ${correctName}.`
} 

module.exports = greet
