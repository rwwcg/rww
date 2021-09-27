<div align="center">

## RWW

RWW is a library to read and write JSON to the file system<br>Import your file and the changes will be reflected in the given file

[![npm](https://img.shields.io/npm/dt/rww.svg)](https://npmjs.com/package/rww)
[![npm](https://img.shields.io/npm/dm/rww.svg)](https://npmjs.com/package/rww)
[![Known Vulnerabilities](https://snyk.io/test/github/spux/rww/badge.svg?targetFile=package.json)](https://snyk.io/test/github/spux/rww?targetFile=package.json)

---
#### Get Started with RWW



---


</div>

## Features

&nbsp;&nbsp;✓&nbsp; Read and write to the files system <br>

## Get Started
### Install with npm

Run the following command in your terminal
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

The changes will now be reflected in the underlying file

## License

MIT

