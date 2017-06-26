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
    return str.replace(/([A-Z])/g, '_$1').toLowerCase()
  }

  // parase {name:'test',tableId:1} to {name:'test',table_id:1}
  propsToColumn (obj) {
    let columnObj = {}
    Object.keys(obj).forEach(k => {
      columnObj[this.decamelize(k)] = obj[k]
    })
    return columnObj
  }

  load (tableName, file) {
    const origins = require(file)
    let _conn
    return this._conn
      .then(conn => {
        _conn = conn
        return _conn.query('set foreign_key_checks = 0')
      })
      .then(() => _conn.query(`delete from ${tableName}`))
      .then(() => _conn.query(`alter table ${tableName} auto_increment = 1`))
      .then(() => Promise.mapSeries(origins, (d) => _conn.query(`insert into ${tableName} set ?`, this.propsToColumn(d))))
      .then(() => _conn.query('set foreign_key_checks = 1'))
      .catch(err => console.log(err))
  }
}

module.exports = exports.default
