import { expect } from 'chai'
import path from 'path'
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
    const file = path.join(__dirname, './user.json')
    return j2m.convert('user', file)
      .then(res => {
        expect(res).to.be.an('object')
      })
  })
})
