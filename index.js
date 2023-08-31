import { execSync } from "node:child_process";

/**
 * @param {string} filename
 */
export async function getHistory(filename) {
  const commit_hashes = execSync(`git log --follow --format=%h ${filename}`)
    .toString()
    .split("\n");
  /**
   * @type {Array<Promise<{commit: string, file: string}>>}
   */
  const files = [];
  for (let commit of commit_hashes) {
    files.push(
      Promise.resolve().then(() => {
        return {
          commit,
          file: execSync(`git show ${commit}:${filename}`).toString(),
        };
      })
    );
  }
  return Promise.all(files);
}
