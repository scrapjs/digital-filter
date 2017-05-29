/**
 * Simple leaky integrator
 *
 * @module  digital-filter/leaky-integrator
 */
'use strict'

module.exports = function leaky (src, opts) {
	let λ = (opts && opts.lambda != null) ? opts.lambda : .95
	let y = (opts && opts.y) || 0

	for (let i = 0, l = src.length; i < l; i++) {
		y = λ * y + (1 - λ) * src[i]
		src[i] = y
	}

	if (opts) opts.y = y

	return src
}
