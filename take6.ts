// 関数

import { convertToObject } from "typescript";

// <Typescriptの関数の特徴>
// 関数そのものを変数に入れて名前をつけられるし、データ構造にも組み込める
// 他の関数の引数に関数を渡せる
// 関数の返り値として返すことができる

// <関数の種類>
// 名前がない関数は無名関数、あるいは「アノニマス関数」と呼ぶ
// 関数の内部で作られる関数を「クロージャ」と呼ぶ
// 何かのオブジェクトに属する関数は「メソッド」と呼ぶ
// 時間のかかる処理を行い、それが終わるまで他のタスクを途中で行える関数を「非同期関数」と呼ぶ
// オーバーロードは使えない

// 基本的な書き方
function checkFlag(flag: boolean): string {
    console.log(flag);
    return "check done";
}

// アロー関数
const normalize = (input: string): string => {
    return input.toLowerCase();
}

// 文字配列の降順ソート
const list: string[] = ["小学生", "中学生", "高校生"];
list.sort((a, b) => {
    if (a.toLocaleLowerCase() > b.toLocaleLowerCase()) {
        return 1;
    } else if (a.toLowerCase() > b.toLowerCase()) {
        return-1;
    } else {
        return 0;
    }
});

// void
function hello2(): void {
    console.log("おはよう");
}

interface Greeter {
    // noImplicitAny: true だとエラー
    // error TS7010: 'hello', which lacks return-type annotation,
    // implicitly has an 'any' return type.
    hello2();
}

// 返り値の型は特定の型1つに限定すべき

// 文字列と数値を受け取り、booleanを返す関数
let check: (arg1: string, arg2: number) => boolean;

// 関数の引数の中に関数を入れる場合
let check2: (arg1: string, arg2: (arg3: string) => number) => boolean;

// 一度だけ変換するソート
function sort(a: string[], conv: (value: string) => string) {
    const entries = a.map((value) => [value, conv(value)]);
    entries.sort((a,b) => {
        if (a[1] > b[1]) {
            return 1;
        } else if (a[1] < b[1]) {
            return -1;
        } else {
            return 0;
        }
    });
    return entries.map(entry => entry[0]);
}

const a: string[] = ["a", "b", "c", "d"];
console.log(sort(a, s => s.toLocaleLowerCase()));

// 変数宣言(代入なし)
let callback: (name: string) => void;

// ダミー関数の設定
callback = (name: string): void => {};

// 新しいデフォルト引数
function f (name="小動物", favorite="小豆餅") {
    console.log(`${name} は ${favorite} が好きです`);
}

f(); // 省略して呼べる

// 分割代入を使って配列やオブジェクトを変数に展開＆デフォルト値も設定
function fav ({ name="小動物", favorite="小豆餅" } = {}) {
    // :
}

// 関数を含むオブジェクトの定義方法
const smallAnimal = {
    getName() {
        return "小動物";
    },
    _favorite: "小笠原";
    get favorite() {
        return this._favorite;
    },
    set favorite(favorite) {
        this._favorite = favorite;
    }
};

// クロージャーとthisとアロー関数
function a() {
    const b = 10;
    function c() {
        console.log({b}); // bが表示される
    }
    c();
}

// アロー関数ならその外の this が維持される
this.button.addEventListener("click", () => {
    this.smallAnimal.walkTo("タコ公園");
});

// アロー関数の表記方法のバリエーション
// 基本系
(arg1, arg2) => { /* 式 */ };

// 引数が 1 つの場合は引数のカッコを省略できる
// ただし型を書くとエラーになる
arg1 => { /* 式 */ };

// 引数が0の場合はカッコが必要
() => { /* 式 */ };

// 式の{ }を省略すると、式の結果がreturnされる
arg => arg * 2;

// { }をつける場合は、値を返すときはreturnを書かなければならない
arg => {
    return arg * 2;
};

function f(a, b, c) {
    console.log(a, b, c);
}
const params = [1, 2, 3];
// 新: スプレッド構文を使うと同じことが簡単に行える
f(...params);
// 新: スプレッド構文。固定属性との共存もラクラク
const f = (a, b, ...c) => {
    console.log(a, b, c);
};
f(1, 2, 3, 4, 5, 6);

// 即時実行関数はもう使わない
