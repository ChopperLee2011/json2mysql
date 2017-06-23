import mysql from 'mysql2/promise'
import Promise from 'bluebird'

export default class Json2mysql {
  constructor (opts) {
    this._conn = mysql.createConnection({
      host: opts.host,
      user: opts.user,
      password: opts.password,
      database: opts.database
    })
  }

  decamelize (str) {
    return str.replace(/[A-Z]/g, `_$1`)
  }

  // parase {name:'test',tableId:1} to 'name, table_id'
  propsToColumn (obj) {
    Object.keys(obj).reduce((pre, cur) => {
      cur = this.decamelize(cur)
      return `${pre}, ${cur}`
    })
  }

  convert (tableName, jsonFile) {
    const origins = require(jsonFile)
    let _conn
    return this._conn
      .then(conn => {
        _conn = conn
        return _conn.query(`delete from ${tableName}`)
      })
      .then(() => _conn.query(`alter table ${tableName} auto_increment = 1`))
      .then(() => Promise.mapSeries(origins, (d) => _conn.query(`insert into ${tableName} (${this.propsToColumn()}) values ('test' ,1)`)))
  }
}

module.exports = exports.default
