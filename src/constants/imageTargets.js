/**
 * Single source of truth for image optimization targets.
 *
 * Consumed by scripts/optimize-images.mjs, which emits one
 * `src/assets/optimized/<dir>/<name>.webp` per source image, resized to
 * `maxWidth` (or left untouched when the source is already smaller).
 *
 * `maxWidth` is the largest rendered CSS size of the image, times ~2 for
 * retina. `file` targets optimize a single file instead of a whole directory.
 */
export const IMAGE_TARGETS = [
    { key: 'classPhotos', dir: 'classes/photos', maxWidth: 800, quality: 78 },
    { key: 'teacherPhotos', dir: 'images/teachers', maxWidth: 700, quality: 80 },
    { key: 'merch', dir: 'merch', maxWidth: 900, quality: 80 },
    { key: 'mds', dir: 'images/mds', maxWidth: 900, quality: 80 },
    { file: 'images/graffiti-overlay.webp', maxWidth: 800, quality: 40 },
    { file: 'images/logo/mds_neg.webp', maxWidth: 800, quality: 82 },
    { file: 'images/logo/moast-logo.webp', maxWidth: 320, quality: 85 },
    { file: 'images/logo/white_letters.webp', maxWidth: 400, quality: 85 },
    { file: 'images/logo/logo_nobg.webp', maxWidth: 96, quality: 85 },
];

const targetsByKey = new Map(IMAGE_TARGETS.filter((target) => target.key).map((target) => [target.key, target]));

export const getImageTarget = (key) => {
    const target = targetsByKey.get(key);
    if (!target) throw new Error(`Unknown image target "${key}". Known keys: ${[...targetsByKey.keys()].join(', ')}`);
    return target;
};
