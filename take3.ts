// 変数に代入。型名を付けるときは配列に入れる要素の型名の後ろに [] を付与する
// 後ろの型が明確であれば型名は省略可能

const years: number[] = [2019, 2020, 2021];
const divs: string[] = ['tig', 'tag', 'sig', 'gig'];

// 配列に要素を追加。複数個も追加可能
years.push(2022);
years.push(2023, 2024);

// 要素から取り出し
const first = years[0];

// タプル
const movie: [string, number] = ['Gozilla', 1954];

// 残余構文
const smalls = [
    "小動物",
    "小型車",
    "小論文"
    ];

const [smallAnimal, smallCar, essay] = smalls;
const [, ...other] = smalls;

// boolean型のinclude()メソッド
const places = ["小岩駅", "小浜市", "小倉駅"];

if (places.includes("小岩駅")) {
    // 見つかった
}

const others = [
    "市民",
    "都民",
    "国民"
]

// ソート
const numbers = [30, 1, 100];

numbers.sort();
numbers.sort((a, b) => a - b);

const stations = [
    {name: "池袋", users: 558623},
    {name: "新宿", users: 775386},
    {name: "渋谷", users: 366128},
    {name: "東京", users: 462589}
    ];
    stations.sort((a, b) => a.users - b.users);

const stations = [
    {name: "大手町", lines: 5, yomi: "おおてまち"},
    {name: "飯田橋", lines: 7, yomi: "いいだばし"},
    {name: "永田町", lines: 5, yomi: "ながたちょう"},
    ];

// number, stringどちらでもこのような書き方が可能
function cmpNum (a: number, b: number) {
    return (a < b) ? -1 : (a == b) ? 0 : 1; 
}
function cmpStr(a: string, b: string) {
    return (a < b) ? -1 : (a === b) ? 0 : 1;
    }

stations.sort((a, b) => {
    const lineScore = cmpNum(a.lines, b.lines);
    const yomiScore = cmpStr(a.yomi, b.yomi);
    // わかりやすく 10 倍しているが、2 倍でも OK
    return lineScore * 10 + yomiScore;
})

// *非破壊のソートはない

// for of ループ
// entries() メソッドは、出力ターゲットを ES2015 以上にしないと動作しない

// let iterable = ["小金井", "小淵沢", "小矢部"];
// for (const [i, value] of iterable.entries()) {
//     console.log(i, value);
// }
//

