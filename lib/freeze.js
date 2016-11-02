'use strict'

// Import
var assert = require('assert-helpers')
var joe = require('joe')

// Tests
joe.suite('freeze example', function (suite, test) {
	test('api is readonly within node', function () {
		// Only run if our environment supports this
		if ( typeof window === 'undefined' ) {
			// Attempt modification
			try {
				joe.blah = "was set when it shouldn't have been"
			}
			catch (err) {
				// https://travis-ci.org/bevry/joe/jobs/135251737
			}

			// Test that the modifications were not successful
			assert.equal(joe.blah == null, true, 'modification test, result: ' + joe.blah)
		}
	})
})
