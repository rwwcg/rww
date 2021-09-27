const fs = require('fs')

function rww(uri) {
  var json = fs.readFileSync(uri)
  json = JSON.parse(json)

  const handler = {
    uri: uri,
    set(target, property, value) {
      // console.log('writing to', uri)
      target[property] = value
      fs.writeFileSync(uri, JSON.stringify(target, null, 2))
      return true
    }
  }
  return new Proxy(json, handler)
}

module.exports = rww