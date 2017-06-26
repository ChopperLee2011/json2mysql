# json2mysql

[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Downloads][download-badge]][npm-url]
[![Code Style][standard-image][standard-url]]

A tool to **remove** all records in one Mysql table and load from a JSON/JS object file.

**note** It will disable foreign key check when remove data, an enable after loading finish.

## Install

```sh
npm i json2mysql
```

## Usage

```js
import json2mysql from "json2mysql"

json2mysql() // true
```

## Test
1. `docker-compose up -d ` will create database container
2. create a test table in your database

 ```sql
CREATE TABLE `user` (
  `id` mediumint(9) NOT NULL AUTO_INCREMENT,
  `name` text,
  `team_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
```

3. `npm test`

## License

MIT © [chopperlee]

[npm-url]: https://npmjs.org/package/json2mysql
[npm-image]: https://img.shields.io/npm/v/json2mysql.svg?style=flat-square

[travis-url]: https://travis-ci.org/chopperlee/json2mysql
[travis-image]: https://img.shields.io/travis/chopperlee/json2mysql.svg?style=flat-square

[download-badge]: http://img.shields.io/npm/dm/json2mysql.svg?style=flat-square

[standard]: https://img.shields.io/badge/code_style-standard-brightgreen.svg