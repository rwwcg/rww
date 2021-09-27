#!/usr/bin/env node

const rww = require('../')

var dataFile = './test/data/test.json'

var j = rww(dataFile)
j.points = 2
console.log(j)
