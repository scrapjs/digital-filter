# digital-filter [![experimental](http://badges.github.io/stability-badges/dist/experimental.svg)](http://github.com/badges/stability-badges)

Collection of digital filters, for audio & dsp applications.

## Usage

[![npm install digital-filter](https://nodei.co/npm/digital-filter.png?mini=true)](https://npmjs.org/package/digital-filter/)

Produce 1024 samples of [grey noise](https://en.wikipedia.org/wiki/Grey_noise):

```js
const noise = require('colors-of-noise/white')
const filter = require('digital-filter/loudness')

//generate frame of grey noise
let data = filter(noise(new Float32Array(1024)))
```

## Filters

* [x] [leaky integrator]()
* [ ] [moving average]()
* [ ] [biquad]()
* [ ] [loudness]()
* [ ] lowpass
* [ ] hipass
* [ ] rumble
* [ ] flutter
* [ ] noise
* [ ] bessel
* [ ] butterworth
* [ ] matched
* [ ] elliptical
* [ ] linkwitz-riley
* [ ] chebyshev
* [ ] savitzky-golay
* [ ] curve (custom f-curve)

### leakyIntegrator(data, {lambda: 0.95, y: 0})

[FIR]

[Leaky integrator](https://en.wikipedia.org/wiki/Leaky_integrator). Takes input array `data` and options, modifies array in-place. `y` is updated after processing.

* `lambda` defines amount of "leak".
* `y` keeps value of last sample.

```js
let leaky = require('digital-filter/leaky-integrator')

let opts = {lambda: .5, y: 0}

//render 3 frames
for (let i = 0; i < 3; i++) {
	let data = new Float32Array(1024)
	leaky(data, opts)
}
```

### movingAverage(data, {memory: [], })

[FIR]



### loudness(data, {type: ''})

Implemented filter types:

* `a` — [A-weighting](https://en.wikipedia.org/wiki/A-weighting)
* `b` — B-weighting
* `c` — C-weighting
* `d` — D-weighting
* `z` — Z-weighting (zero weighting)
* `itu` — [ITU-R 468 weighting](https://en.wikipedia.org/wiki/ITU-R_468_noise_weighting)



## See also

* [audio-filter](https://github.com/audiojs/audio-filter) − digital filters for audio infrastructure
* [colors-of-noise](https://github.com/scijs/colors-of-noise) − collection of noise generators
