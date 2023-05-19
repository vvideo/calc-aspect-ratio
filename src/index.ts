export interface AspectRatioResult {
    x: number;
    y: number;
    value: string;
    approximately: boolean;
    nonStandard: boolean;
}

export interface CalcAspectRatioOptions {
    tolerance: number;
}

interface StandardAspectRatio {
    x: number;
    y: number;
    ratio: number;
    value: string;
}

const standardAspectRatio: StandardAspectRatio[] = [
    [1, 1],
    [3, 2],
    [4, 1],
    [4, 3],
    [5, 3],
    [5, 4],
    [16, 9],
    [16, 10],
    [21, 9],
    [32, 9],
    // Ultra Wide
    [12, 5],
    [43, 18],
    [64, 27],
    // Super Wide
    [16, 5],
    [18, 5],
    [32, 9],
].map(item => {
    const [x, y] = item;
    return ({
        x,
        y,
        value: `${x}:${y}`,
        ratio: x / y,
    });
});

const ratios = standardAspectRatio.map(item => item.ratio).sort();
const hashStandardRatios = standardAspectRatio.reduce<Record<number, StandardAspectRatio>>((previous, currentValue) => {
    previous[currentValue.ratio] = currentValue;
    return previous;
}, {});

const DEFAULT_TOLERANCE = 0.06;

export function calcAspectRatio(
    width: number,
    height: number,
    options: CalcAspectRatioOptions = { tolerance: DEFAULT_TOLERANCE },
): AspectRatioResult  {
    const ratio = Math.max(width, height) / Math.min(width, height);
    const standardRatio = hashStandardRatios[ratio];
    if (standardRatio) {
        return {
            x: standardRatio.x,
            y: standardRatio.y,
            value: standardRatio.value,
            approximately: false,
            nonStandard: false,
        };
    }

    const element = findElement(ratios, ratio, options.tolerance);
    if (element) {
        const result = hashStandardRatios[element];
        return {
            x: result.x,
            y: result.y,
            value: `≈${result.value}`,
            approximately: true,
            nonStandard: false,
        };
    }

    const x = Math.round(ratio * 100) / 100;
    const y = 1;

    return {
        x,
        y,
        value: `${x}:${y}`,
        approximately: false,
        nonStandard: true,
    };
}

function findElement(elems: number[], value: number, tolerance: number) {
    for (let i = 0; i < elems.length; i++) {
        const diff = Math.abs(elems[i] - value);
        if (diff < tolerance) {
            return elems[i];
        }
    }

    return undefined;
}
