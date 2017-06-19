import { expect } from 'chai'
import Json2mysql from '../src'

describe('json2mysql', () => {
  it('return true', () => {
    const opts = {
      host: 'localhost',
      user: 'admin',
      password: 'secret',
      database: 'demo'
    }
    const j2m = new Json2mysql(opts)
    expect(j2m).to.be.an('object')
    j2m.convert()
  })
})
