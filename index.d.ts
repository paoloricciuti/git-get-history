/**
 * @param {string} filename
 */
export function getHistory(filename: string): Promise<{
    commit: string;
    file: string;
}[]>;
