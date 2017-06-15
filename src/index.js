import mysql from 'mysql2'
import { _ } from 'lodash'

class Json2mysql {
  constructor (opts) {
    this._dbconnection = mysql.createConnection({
      host: opts.host,
      user: opts.user,
      database: opts.database
    })
  }
  convert (tableName, jsonFile) {
    console.log(tableName)
    console.log(jsonFile)
    const str = `select * from ${tablename} order by id`
    this._dbconnection.query(sql, (err, results) => {
      console.log(results)
    })
  }
}
