#!/usr/bin/env node


var json = require('../')('./test/data/test.json')

json.points = Math.random() * 10
console.log(json)


