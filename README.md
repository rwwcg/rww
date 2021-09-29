<div align="center">

## RWW

RWW is a library to read and write JSON to the file system<br>Import your file and the changes will be reflected in the given file system

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/rwwcg/rww/blob/gh-pages/LICENSE)
![npm](https://img.shields.io/npm/v/rww)
[![npm](https://img.shields.io/npm/dw/rww.svg)](https://npmjs.com/package/rww)

---
#### Read Write Web (RWW)
---
</div>

## Features

&nbsp;&nbsp;✓&nbsp; Read and write to the file system <br>

## Getting Started

### Install with npm

```
npm install rww
```
### Import a JSON file

```JavaScript
var json = require('rww')('./test.json')
```
### Change the JSON

```JavaScript
json.random = Math.random()
```

The changes will now be reflected in the underlying file system

## License

MIT

