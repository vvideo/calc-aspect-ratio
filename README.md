# calc-aspect-ratio
[![NPM version](https://img.shields.io/npm/v/calc-aspect-ratio.svg?style=flat)](https://www.npmjs.com/package/calc-aspect-ratio)
[![NPM downloads](https://img.shields.io/npm/dm/calc-aspect-ratio.svg?style=flat)](https://www.npmjs.com/package/calc-aspect-ratio)
[![install size](https://packagephobia.com/badge?p=calc-aspect-ratio)](https://packagephobia.com/result?p=calc-aspect-ratio)

[Small package](https://bundlephobia.com/result?p=calc-aspect-ratio) for calculating aspect ratio of display resolution.

## Install
`npm i --save-dev calc-aspect-ratio`

## Using
```js
import { calcAspectRatio } from 'calc-aspect-ratio';

const aspectRatio = calcAspectRatio(1920, 1080);
console.log(aspectRatio);
/* console output:
    {
        x: 16,
        y: 9,
        value: '16:9',
        approximately: false,
        nonStandard: false
    }
 */

// or calc for current screen
console.log(calcAspectRatio(screen.width, screen.height).value);
```

## Examples
- Standard aspect ratio: `4:3`
- Approximate aspect ratio: `≈16:9`
- Nonstandard aspect ratio: `11.99:1`

## Links
- [Display resolution](https://en.wikipedia.org/wiki/Display_resolution)
- [Graphics display resolution](https://en.wikipedia.org/wiki/Graphics_display_resolution)
- [Ultrawide formats](https://en.wikipedia.org/wiki/Ultrawide_formats)
