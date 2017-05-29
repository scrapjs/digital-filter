/**
 * Simple leaky integrator
 *
 * @module  digital-filter/leaky-integrator
 */
'use strict'

module.exports = function leaky (src, param) {
	let y = param.y || 0
	let λ = param.lambda
	if (λ == null) λ = .95

	for (let i = 0, l = src.length; i < l; i++) {
		y = λ * y + (1 - λ) * src[i]
		src[i] = y
	}

	param.y = y

	return src
}
