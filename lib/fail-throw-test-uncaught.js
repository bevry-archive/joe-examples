'use strict'

// Import
var joe = require('joe')

// Test
joe.suite('example suite', function (suite, test) {
	test('example test', function () {
		setTimeout(function () {
			throw new Error('I am the deliberate throw that occured in the test, but after the test has completed')
		}, 10)
	})
})
