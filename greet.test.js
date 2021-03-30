const greet = require('./greet')

describe('greet', () => {
  it('should greet Bob', () => {
    expect(greet('Bob')).toBe('Hello, Bob.')
  })

  it('should greet friend, when no name is defined', () => {
    expect(greet()).toBe('Hello, my friend.')
  })

  it('should handle shouting', () => {
    expect(greet('JERRY')).toBe('HELLO JERRY!')
  })

  it('should handle two names', () => {
    expect(greet(['Jill', 'Jane'])).toBe('Hello, Jill and Jane.')
  })

  it('should handle two names shouting', () => {
    expect(greet(['DANA', 'TOM'])).toBe('HELLO DANA AND TOM!')
  })

  it('should handle arbitary number of names', () => {
    expect(greet(["Amy", "Brian", "Charlotte"])).toBe("Hello, Amy, Brian, and Charlotte.")
  })

})
