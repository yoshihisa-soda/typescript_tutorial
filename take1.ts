// 変数
// 変数に関しては基本的にconstを使用、再代入が必要な場合のみletを使用

import { NumericLiteral } from "typescript";

const name = "小動物";

let animalName;
if (mode === "slack") {
    animalName = "柴犬";
} else if (mode === "twitter") {
    animalName = "小鳥";
}

let familyName: string;


// 推論できない場合はany型になる
let address: any;


// 型がAでもBでも良い場合（合併型（Union Type）という）
let birthYear: number | string;
// 正常
birthYear = 1980;
// こちらも正常
birthYear = "昭和";
// nullはエラー
// birthYear = null;

// 変数に特定の文字列しか設定できないようにする
let favoriteFood: "北極" | "冷やし味噌";
// これはエラー
// favoriteFood = "味噌タンメン" 

// 数値も設定可能
type PointRate = 8 | 10 | 20;
// これもエラーに
// let point: PointRate = 12;

// 値と型の合併型
let birthdayYear: number | "昭和" | "平成";
birthdayYear = "昭和";


function letFunction() {
    let genius = "天才";
    console.log(`巻き上げテスト ${genius}`);
}

letFunction();

// 変数スコープ
for (let i = 0; i < 10; i++) {
    // do something
}

// console.log(i);