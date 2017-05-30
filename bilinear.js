/**
 * Generic bilinear filter formula
 *
 * @module  digital-filter/bilinear
 */

'use strict'

module.exports = function bilinear (data, param) {
	let a = param.a
	let b = param.b
	let type = param.type

	//type can be:band-pass, band-reject, high-pass, high-reject


	y[i] = a0 * x[i] + a1 * x[i-1] - b1 * y[i-1] - b2 * y[i-2]
}

let order = {
	1: () => {
		let A, A0, A1, B0, B1, a0, a1, b1

		let A1C = A1*C, B1C = B1*C

		A = B0 + B1C
		a0 = (A0 + A1C) / A
		a1 = (A0 - A1C) / A
		b1 = (B0 - B1C) / A
	},
	2: () => {
		let A, B0, B1, B2, A0, A1, A2, a0, a1, a2, b1, b2

		let C2 = C*C
		let A1C = A1*C, A2C = A2*C2
		let B1C = B1*C, B2C = B2*C2

		A = B0 + B1C + B2C

		a0 = (  A0 +   A1*C +   A2*C2) / A
		a1 = (2*A0          - 2*A2*C2) / A
		a2 = (  A0 -   A1*C +   A2*C2) / A

		b1 = (2*B0          - 2*B2*C2) / A
		b2 = (  B0 -   B1*C +   B2*C2) / A
	}

	3: () => {
		let A, B0, B1, B2, B3, A0, A1, A2, A3, a0, a1, a2, a3, b1, b2, b3

		let C2 = C*C, C3 = C*C*C
		let A1C = A1*C, A2C = A2*C2, A3C = A3*C3
		let B1C = B1*C, B2C = B2*C2, B3C = B3*C3

		A = B0 + B1C + B2C + B3C

		a0 = (  A0 + A1C + A2C +   A3C) / A
		a1 = (3*A0 + A1C - A2C - 3*A3C) / A
		a2 = (3*A0 - A1C - A2C + 3*A3C) / A
		a3 = (  A0 - A1C + A2C -   A3C) / A

		b1 = (3*B0 + B1C - B2C - 3*B3C) / A
		b2 = (3*B0 - B1C - B2C + 3*B3C) / A
		b3 = (  B0 - B1C + B2C -   B3C) / A
	},

	4: () => {
		let A, B0, B1, B2, B3, B4, A0, A1, A2, A3, A4, a0, a1, a2, a3, a4, b1, b2, b3, b4

		let C2 = C*C, C3 = C*C*C, C4 = C2*C2
		let A1C = A1*C, A2C = A2*C2, A3C = A3*C3, A4C = A4*C4
		let B1C = B1*C, B2C = B2*C2, B3C = B3*C3, B4C = B4*C4

		A = B0 + B1C + B2C + B3C + B4C

		a0 = (  A0 +   A1C +   A2C +   A3C +   A4C) / A
		a1 = (4*A0 + 2*A1C         - 2*A3C - 4*A4C) / A
		a2 = (6*A0         - 2*A2C         + 6*A4C) / A
		a3 = (4*A0 - 2*A1C         + 2*A3C - 4*A4C) / A
		a4 = (  A0 -   A1C +   A2C -   A3C +   A4C) / A

		b1 = (4*B0 + 2*B1C +       - 2*B3C - 4*B4C) / A
		b2 = (6*B0         - 2*B2C         + 6*B4C) / A
		b3 = (4*B0 - 2*B1C         + 2*B3C - 4*B4C) / A
		b4 = (  B0 -   B1C +   B2C -   B3C +   B4C) / A
	},

	5: () => {
		let A, B0, B1, B2, B3, B4, B5, A0, A1, A2, A3, A4, A5, a0, a1, a2, a3, a4, a5, b1, b2, b3, b4, b5

		let C2 = C*C, C3 = C*C*C, C4 = C2*C2, C5 = C2*C3
		let A1C = A1*C, A2C = A2*C2, A3C = A3*C3, A4C = A4*C4, A5C = A5*C5
		let B1C = B1*C, B2C = B2*C2, B3C = B3*C3, B4C = B4*C4, B5C = B5*C5

		A = B0 + B1C + B2C + B3C + B4C + B5C

		a0 = ( 1*A0 + 1*A1C + 1*A2C + 1*A3C + 1*A4C +  1*A5C) / A
		a1 = ( 5*A0 + 3*A1C + 1*A2C - 1*A3C - 3*A4C -  5*A5C) / A
		a2 = (10*A0 + 2*A1C - 2*A2C - 2*A3C + 2*A4C + 10*A5C) / A
		a3 = (10*A0 - 2*A1C - 2*A2C + 2*A3C + 2*A4C - 10*A5C) / A
		a4 = ( 5*A0 - 3*A1C + 1*A2C + 1*A3C - 3*A4C +  5*A5C) / A
		a5 = ( 1*A0 - 1*A1C + 1*A2C - 1*A3C + 1*A4C -  1*A5C) / A

		b1 = ( 5*B0 + 3*B1C + 1*B2C - 1*B3C - 3*B4C -  5*B5C) / A
		b2 = (10*B0 + 2*B1C - 2*B2C - 2*B3C + 2*B4C + 10*B5C) / A
		b3 = (10*B0 - 2*B1C - 2*B2C + 2*B3C + 2*B4C - 10*B5C) / A
		b4 = ( 5*B0 - 3*B1C + 1*B2C + 1*B3C - 3*B4C +  5*B5C) / A
		b5 = ( 1*B0 - 1*B1C + 1*B2C - 1*B3C + 1*B4C -  1*B5C) / A
	},

	6: () => {
		let A, B0, B1, B2, B3, B4, B5, B6, A0, A1, A2, A3, A4, A5, A6, a0, a1, a2, a3, a4, a5, a6, b1, b2, b3, b4, b5, b6

		let C2 = C*C, C3 = C*C*C, C4 = C2*C2, C5 = C2*C3, C6 = C3*C3
		let A1C = A1*C, A2C = A2*C2, A3C = A3*C3, A4C = A4*C4, A5C = A5*C5, A6C = A6*C6
		let B1C = B1C, B2C = B2C, B3C = B3C, B4C = B4C, B5C = B5C, B6C = B6C

		A = B0 + B1*C + B2*C2 + B4*C3 + B4*C4 + B5*C5 + B6*C6

		a0 = (   A0 +   A1C +   A2C +   A3C +   A4C +   A5C +    A6C) / A
		a1 = ( 6*A0 + 4*A1C + 2*A2C +       - 2*A4C - 4*A5C -  6*A6C) / A
		a2 = (14*A0 + 5*A1C - 2*A2C - 3*A3C -   A4C + 5*A5C + 14*A6C) / A
		a3 = (20*A0         - 4*A2C         + 4*A4C         - 20*A6C) / A
		a4 = (15*A0 - 5*A1C -   A2C + 3*A3C -   A4C - 5*A5C + 15*A6C) / A
		a5 = ( 6*A0 - 4*A1C + 2*A2C         - 2*A4C + 4*A5C -  6*A6C) / A
		a6 = (   A0 -   A1C +   A2C -   A3C +   A4C -   A5C +    A6C) / A

		b1 = ( 6*B0 + 4*B1C + 2*B2C +       - 2*B4C - 4*B5C -  6*B6C) / A
		b2 = (14*B0 + 5*B1C - 2*B2C + 3*B3C -   B4C + 5*B5C + 14*B6C) / A
		b3 = (20*B0 +       - 4*B2C +       + 4*B4C         - 20*B6C) / A
		b4 = (15*B0 - 5*B1C -   B2C + 3*B3C -   B4C - 5*B5C + 15*B6C) / A
		b5 = ( 6*B0 - 4*B1C + 2*B2C +       - 2*B4C + 4*B5C -  6*B6C) / A
		b6 = (   B0 -   B1C +   B2C -   B3C +   B4C -   B5C +    B6C) / A
	}
}
