import { expect } from 'chai'
import path from 'path'
import Json2mysql from '../src'

describe('json2mysql', () => {
  const opts = {
    host: 'localhost',
    user: 'admin',
    password: 'secret',
    database: 'demo'
  }
  const j2m = new Json2mysql(opts)
  it('can load JSON file to mysql ', () => {
    expect(j2m).to.be.an('object')
    const jsonFile = path.join(__dirname, './users.json')
    return j2m.convert('user', jsonFile)
      .then(res => {
        expect(res).to.be.an('array')
      })
  })

  it('can load JS object to mysql ', () => {
    const jsObj = path.join(__dirname, './users')
    return j2m.convert('user', jsObj)
      .then(res => {
        expect(res).to.be.an('array')
      })
  })
})
