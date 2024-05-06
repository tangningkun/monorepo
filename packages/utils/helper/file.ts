
import path from 'path';

/**
 * Get user root directory
 * @param dir file path
 */
export function getRootPath(...dir: string[]) {
    return path.resolve(process.cwd(), ...dir);
}
/**
 *
 * @param dir
 * @returns
 */
export function pathResolve(dir: string) {
    return path.resolve(process.cwd(), '.', dir);
}