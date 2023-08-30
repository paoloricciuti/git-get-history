import { execSync } from "node:child_process";

/**
 * @param {string} filename
 */
export async function getHistory(filename) {
  const commit_hashes = execSync(`git log --follow --format=%h% ${filename}`)
    .toString()
    .split("\n");
  const files = [];
  for (let commit of commit_hashes) {
    /**
     * @type {typeof Promise.resolve().then<string>}
     */
    const then = Promise.resolve().then;
    files.push(
      then((/**@type {(value:string)=>void}*/ resolve) => {
        resolve(execSync(`git show ${commit}:${filename}`).toString());
      })
    );
  }
  return Promise.all(files);
}

console.log(getHistory("index.js"));
