const expect = require('chai').expect

const app = require('./index')

describe('app2', () => {
  it('should do the thing', () => {
    expect(app.bar()).to.equal('bar')
  })
})
