import mysql from 'mysql2'
// import { _ } from 'lodash'

export default class Json2mysql {
  constructor (opts) {
    console.log('opts', opts)
    this._connection = mysql.createConnection({
      host: opts.host,
      user: opts.user,
      database: opts.database
    })
  }

  async convert (tableName, jsonFile) {
    console.log(tableName)
    console.log(jsonFile)
    // let updateSqls = []
    // let insertSqls = []
    const connection = await this._connection.connect()
    console.log(connection)

    if (Array.isArray(jsonFile)) {
      for (let obj of jsonFile) {
        if (obj.id) {
          const [rows] = await connection.execute(`SELECT 1 FROM ${tableName} where id = ${obj.id}`)
          console.log(rows)
        }
      }
    }
  }
}

module.exports = exports.default
