'use strict'

// Import
var joe = require('joe')

// Test
joe.suite('example suite', function () {
	throw new Error('I am the deliberate throw that occured during the suite')
})
