/* eslint no-console:0, no-implicit-coercion:0 */
'use strict'

// Import
var joe = require('joe')

// Tests
joe.test('multi sync test example', function () {})
joe.test('multi async test example', function (done) {
	setTimeout(done, 1000)
})

// Suites
joe.suite('multi empty sync suite test example', function () {})
joe.suite('multi empty async suite test example', function (suite, test, done) {
	done()
})

// Nested
joe.suite('multi sync suite example', function (suite, test) {
	test('sub sync test example', function () {})
	test('sub async test example', function (done) {
		setTimeout(done, 1000)
	})
})
joe.suite('multi async suite example', function (suite, test, done) {
	test('sub sync test example', function () {})
	test('sub async test example', function (done) {
		setTimeout(done, 1000)
	})
	done()
})

// Nested nested handled by standard.js

// Finish with some more tests for good measure
joe.test('multi extra async test example', function (done) {
	setTimeout(done, 1000)
})
joe.test('multi extra sync test example', function () {})
