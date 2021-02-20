// 非同期処理
// 具体的には「コールバック」「Promise」「async/await」

import { convertCompilerOptionsFromJson } from "typescript";

console.log("タイマー呼び出し前");
setTimeout(() => {
    console.log("時間がきた");
}, 1000);
console.log("タイマー呼び出し後");


// 非同期の書き方
const resp = await fetch(url);
const json = await resp.json();
console.log(json);

async function(): Promise<number> {
    await aaa();
    return 10;
}


// setTimeoutは最初がコールバックという変態仕様なので仕方なくnew Promise
const sleep = async (time: number): Promise<number> => {
    return new Promise<number> (resolve => {
        setTimeout(() => {
            resolve(time);
        }, time);
    });
};

await sleep(100);

// Node.js 標準ライブラリの promisify を使う

// import { promisify } from "util";
// import { readFile } from "fs";
// const readFileAsync = promisify(readFile);
// const content = await readFileAsync("package.json", "utf8");



