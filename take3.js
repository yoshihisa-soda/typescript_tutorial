// 変数に代入。型名を付けるときは配列に入れる要素の型名の後ろに [] を付与する
// 後ろの型が明確であれば型名は省略可能
var _a;
var _b;
var years = [2019, 2020, 2021];
var divs = ['tig', 'tag', 'sig', 'gig'];
// 配列に要素を追加。複数個も追加可能
years.push(2022);
years.push(2023, 2024);
// 要素から取り出し
var first = years[0];
// タプル
var movie = ['Gozilla', 1954];
// 残余構文
var smalls = [
    "小動物",
    "小型車",
    "小論文"
];
var smallAnimal = smalls[0], smallCar = smalls[1], essay = smalls[2];
var other = smalls.slice(1);
// boolean型のinclude()メソッド
var places = ["小岩駅", "小浜市", "小倉駅"];
if (places.includes("小岩駅")) {
    // 見つかった
}
var others = [
    "市民",
    "都民",
    "国民"
];
// ソート
var numbers = [30, 1, 100];
numbers.sort();
numbers.sort(function (a, b) { return a - b; });
var stations = [
    { name: "池袋", users: 558623 },
    { name: "新宿", users: 775386 },
    { name: "渋谷", users: 366128 },
    { name: "東京", users: 462589 }
];
stations.sort(function (a, b) { return a.users - b.users; });
var stations = [
    { name: "大手町", lines: 5, yomi: "おおてまち" },
    { name: "飯田橋", lines: 7, yomi: "いいだばし" },
    { name: "永田町", lines: 5, yomi: "ながたちょう" },
];
// number, stringどちらでもこのような書き方が可能
function cmpNum(a, b) {
    return (a < b) ? -1 : (a == b) ? 0 : 1;
}
function cmpStr(a, b) {
    return (a < b) ? -1 : (a === b) ? 0 : 1;
}
stations.sort(function (a, b) {
    var lineScore = cmpNum(a.lines, b.lines);
    var yomiScore = cmpStr(a.yomi, b.yomi);
    // わかりやすく 10 倍しているが、2 倍でも OK
    return lineScore * 10 + yomiScore;
});
// *非破壊のソートはない
// for of ループ
// entries() メソッドは、出力ターゲットを ES2015 以上にしないと動作しない
// let iterable = ["小金井", "小淵沢", "小矢部"];
// for (const [i, value] of iterable.entries()) {
//     console.log(i, value);
// }
//
// iterable とイテレータ
var a = ["a", "b", "c"];
var b = [[0, "a"], [1, "b"], [2, "c"]];
// この 2 つの結果は同じ
for (var _i = 0, _c = a.entries(); _i < _c.length; _i++) {
    var _d = _c[_i], i = _d[0], v = _d[1];
    console.log(i, v);
}
for (var _e = 0, b_1 = b; _e < b_1.length; _e++) {
    var _f = b_1[_e], i = _f[0], v = _f[1];
    console.log(i, v);
}
// 読み取り専用
var abc = [1, 2, 3, 4, 5];
// 値やリテラルにつける場合はas const
var cba = [5, 4, 3, 2, 1];
var readonlyArray = [1, 2, 3];
var mutableArray = [1, 2, 3];
function acceptReadonlyArray(a) {
}
function acceptMutableArray(b) {
}
// OK
var readonlyVar = mutableArray;
// NG
// const mutableVar: number[] = readonlyArray;
var mutableVar = readonlyArray;
acceptMutableArray(readonlyArray);
// リテラル 数値や文字列を直接記述した定数のこと (例: const literal = "これはリテラルです";)
// iterable(繰り返し可能), イテレータ: 配列やそれに類似する集合的データ構造（コレクションあるいはコンテナ）の各要素に対する繰り返し処理の抽象化
// オブジェクト
// 定義はキー、コロン (:)、値を書く。要素間は改行
var key = 'favorite drink';
var bigAnimal = (_a = {
        sName: "動物",
        favorite: "いちご",
        'hometown': "ここ"
    },
    _a[key] = "お酒",
    _a);
// 参照は `.`+ 名前、もしくは [名前]
console.log(bigAnimal.sName); // 動物
console.log(bigAnimal[key]); // ストロングゼロ
// JSON（JavaScript Object Notation）
// API通信で使われるデータフォーマットとしてはトップシェア
// 1つめの引数: オブジェクトや配列、文字列などを入れる
// 2つめの引数: データ変換をしたいときの変換関数（ログ出力からパスワードをマスクしたいなど）
// 省略可能。通常は null
// 3つめの引数: 配列やオブジェクトでインデントするときのインデント幅
// 省略可能, 省略すると改行なしの 1行で出力される
var json = JSON.stringify(bigAnimal, null, 2);
// これは複製されて出てくるので、元のbigAnimalとは別物
var bigAnimal2 = JSON.parse(json);
// 途中で nullish（nullかundefined）な値があると、式全体の評価結果が undefined になる
var naturalAnimal = {
    name: "ライオン",
    favorite: "肉"
};
// 一個ずつ確認してアクセスし、大文字の"favorite"を取得
var favorite = (_b = naturalAnimal === null || naturalAnimal === void 0 ? void 0 : naturalAnimal.favorite) === null || _b === void 0 ? void 0 : _b.toUpperCase();
// オブジェクトの要素の加工
var attributes = {
    job: "小説家",
    nearSttion: "岩井駅"
};
// スプレッド構文でコピー
// const copy = {...smallAnimal};
// スプレッド構文でマージ
// const merged = {...smallAnimal, ...attributes};
// map()メソッド
// 与えられた関数を配列のすべての要素に対して呼び出し、その結果からなる新しい配列を生成
var map = new Map([
    ["五反田", "約束の地"],
    ["木更津", "チャッツアイ"]
]);
for (var _g = 0, map_1 = map; _g < map_1.length; _g++) {
    var _h = map_1[_g], key_1 = _h[0], value = _h[1];
    console.log(key_1 + " : " + value);
}
var u = {
    name: "kawana",
    age: 14
};
