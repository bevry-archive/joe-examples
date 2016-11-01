/* eslint no-console:0 */
'use strict'

// Import
var joe = require('joe')

// Our test
joe.suite('timing example', function (suite, test) {
	test('first test', function (complete) {
		setTimeout(function () {
			console.log('this will be outputted second')
			complete()
		}, 1000)
	})

	test('second test', function () {
		console.log('this will be outputted third')
	})

	console.log('this will be outputted first')
})
