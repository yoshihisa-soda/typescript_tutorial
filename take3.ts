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


