import { calcAspectRatio } from '../src/index';

// https://en.wikipedia.org/wiki/Display_resolution
const resolutions: [string, string, number, number][] = [
    ['nHD', '16:9', 640, 360],
    ['SVGA', '4:3', 800, 600],
    ['XGA', '4:3', 1024, 768],
    ['WXGA', '16:9', 1280, 720],
    ['WXGA', '16:10', 1280, 800],
    ['SXGA', '5:4', 1280, 1024],
    ['HD', '≈16:9', 1360, 768],
    ['HD', '≈16:9',	1366, 768],
    ['WXGA+', '16:10', 1440, 900],
    ['N/A', '16:9', 1536, 864],
    ['HD+', '16:9', 1600, 900],
    ['UXGA', '4:3', 1600, 1200],
    ['WSXGA+', '16:10', 1680, 1050],
    ['FHD', '16:9', 1920, 1080],
    ['WUXGA', '16:10', 1920, 1200],
    ['QWXGA', '16:9', 2048, 1152],
    ['QXGA', '4:3', 2048, 1536],
    ['UWFHD', '64:27', 2560, 1080],
    ['QHD', '16:9', 2560, 1440],
    ['WQXGA', '16:10', 2560, 1600],
    ['UWQHD', '43:18', 3440, 1440],
    ['4K UHD', '16:9', 3840, 2160],
    ['high-end displays since 2017', '32:9', 5120, 1440],
    ['Advertisement displays', '4:1', 17280, 4320],
    ['non standard 1', '255:8', 10200, 320],
    ['non standard 2', '33.37:1', 11111, 333],
];

describe('Aspect ratio for display resolution', () => {
    resolutions.forEach(item => {
        const [title, aspectRatio, width, height] = item;
        it(`${width}×${height} (${title}) == "${aspectRatio}"`, () => {
            const result = calcAspectRatio(width, height);
            expect(result.value).toEqual(aspectRatio);
        });
    });
});
