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

## License

MIT © [chopperlee]

[npm-url]: https://npmjs.org/package/json2mysql
[npm-image]: https://img.shields.io/npm/v/json2mysql.svg?style=flat-square

[travis-url]: https://travis-ci.org/chopperlee/json2mysql
[travis-image]: https://img.shields.io/travis/chopperlee/json2mysql.svg?style=flat-square

[download-badge]: http://img.shields.io/npm/dm/json2mysql.svg?style=flat-square

[standard]: https://img.shields.io/badge/code_style-standard-brightgreen.svg