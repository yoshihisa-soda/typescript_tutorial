// 変数に代入
const flag: boolean = true;

// 他のデータ型への変換
console.log(flag.toString()); // 'true' / 'false'になる
console.log(String(flag)); // こちらでも変換可能
console.log(Number(flag)); // 1, 0になる

// 他のデータ型をtrue/falseに変換
const notEmpty = Boolean("test string"); // 変換ルールは後述
// const flags = flagStr == 'true';
const str = "not empty string";
const isEmpty = !str;
const notEmpty = !!str;

// ド・モルガンの定理
// !(P || Q) == !P && !Q;
// !(P && Q) == !P || !Q;

const year: number = 2021;

// 他のデータ型への変換
console.log(year.toString());  // '2021'になる
console.log(year.toString(2)); // toStringの引数で2進数-36進数にできる
console.log(Boolean(year));    // 0以外はtrue

// 無限大 -> Infinity
// 数字ではない -> NaN(Not a Number)

// 値を表示
// シングルクオート、ダブルクオート、バッククオートでくくる
console.log('hello world');
// 変数に代入。変数の型名は string
const name: string = "future";
// 複数行
// シングルクオート、ダブルクオートだとエラーになる
// error TS1002: Unterminated string literal.
const address = '東京都品川区';
// バッククオートなら OK。ソースコード上の改行はデータ上も改行となる
const addressOfTokyo = `東京都
品川区 `;
// 他のデータ型への変換
console.log(parseInt('0100', 10)); // 100 になる
console.log(Boolean(name)); // 空文字列は false、それ以外は true になる
// 他のデータ型を string に変換
const yearOf = 2022;
console.log((2019).toString(2)); // number は toString の引数で 2 進数-36 進数にできる
console.log((true).toString()); // boolean 型を'true'/'false' の文字列に変換
console.log(Stirng(false)); // こちらでも可

// 文字列の結合
console.log(`[Debug]: ${variable}`);

console.log("#################");
