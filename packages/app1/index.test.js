const expect = require('chai').expect

const app = require('./index')

describe('app1', () => {
  it('should do the thing', () => {
    expect(app.foo()).to.equal('foo')
  })

  it('should do other things too', () => {
    expect(app.foo('bar')).to.equal('foo bar')
  })
})
