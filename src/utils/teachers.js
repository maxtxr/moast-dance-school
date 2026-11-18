/**
 * Shortens a class teacher field to first names, keeping every teacher of a
 * co-taught class. 'MARTA SSULL / TOSTA' becomes 'MARTA / TOSTA'.
 */
export const getTeacherFirstNames = (teacher) =>
    teacher
        .split('/')
        .map((name) => name.trim().split(/\s+/)[0])
        .filter(Boolean)
        .join(' / ');
