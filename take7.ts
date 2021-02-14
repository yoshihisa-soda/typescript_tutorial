// <Dateクラス>

import { convertCompilerOptionsFromJson } from "typescript";

// 現在時刻の取得
// 現在時刻でDateのインスタンス作成
const now = new Date();
// newを付けないと文字列として返ってくる
const nowStr = Date();
// ミリ秒単位のエポック時刻取得
const now2 = Date.now();
// 現在の時刻から 100秒（10 万ミリ秒）前の時刻の取得
const hundredSecAgo = new Date(Date.now() - 100 * 1000);
// エポック時刻取得
const epoch = hundredSecAgo.valueOf();


// 2020年 9月 21日 21時 10分 5秒（日本時間）
const d = new Date(2020, 9, 21, 21, 10, 5);
// 2020年 9月 21日 21時 10分 5秒（UTC: 協定世界時）
const dUtc = new Date(Date.UTC(2020, 9, 21, 21, 10, 5));

now.toISOString()
// '2020-09-21T12:38:15.655Z'
now.toString()
// 'Mon Sep 21 2020 21:38:15 GMT+0900 (Japan Standard Time)'

const fromToISOString = new Date(`2020-09-21T12:38:15.655Z`);
// 2020-09-21T12:38:15.655Z
const fromToISOStringEpoch = Date.parse(`2020-09-21T12:38:15.655Z`);
// 1600691895655


const now3 = new Date();

// 1 時間後
const oneHourLater = new Date();
oneHourLater.setHours(now.getHours() + 1);
// 1 日後
const oneDayLater = new Date();
oneDayLater.setDate(now.getDate() + 1);
// 1 ヶ月後
const oneMonthLater = new Date();
oneMonthLater.setMonth(now.getMonth() + 1);
// 1 年後
const oneYearLater = new Date();
oneYearLater.setFullYear(now.getFullYear() + 1);

// 今日の0時 0分 0秒のエポック時刻
const today = (new Date()).setHours(0, 0, 0, 0);
// 比較したい日時
const someDate = (new Date()).setHours(1, 0, 0, 0);
// 同じ日ならTrueを返す
const isSomeDay = (new Date(someDate)).setHours(0, 0, 0, 0) === today;

// 基準日で時間だけオフセットした Date インスタンス
const meetingTime = new Date((946684800 + 3600) * 1000); // JS の時間はミリ秒なので 1000 倍する
console.log(`${ meetingTime.getHours() } : ${ meetingTime.getMinutes() }`);
// 10:00

// 今日のミーティング時間を計算するには、今日の年月日を設定する
const now4 = new Date();
const todayMeeting = new Date(meetingTime);
todayMeeting.setFullYear(now.getFullYear(), now.getMonth(), now.getDate());

const now5 = new Date();
console.log(now5.toLocaleDateString('en-US', { timeZone: 'America/Los_Angeles' }));
// '12/8/2020, 2:19:55 AM'




// <RegExpクラス>

// 正規表現
// 正規表現は string と一緒に使うクラスで、ちょっと賢い検索を実現

// 正規表現はリテラルで記述できる
const input = "03-1234-5678";

if (input.match(/\d{2,3}-\d{3,4}-\d{4}/)) {
    console.log("電話番号です");
}

// \s（改行やタブなどのスペースにマッチ）
// \w（英数字にマッチ）
// \d（数字にマッチ）
// 大文字にすると否定（\S は改行タブスペース以外にマッチ）
// . はすべての文字にマッチ
// 先頭の^は文字列の先頭、最後の$は末尾

// 日本の郵便番号は数字3桁 + 数字4桁
const postalCode = "299-2205";
if (postalCode.match(/\d{3} -\d{4}/)) {
    console.log("郵便番号です");
}

const tel = (/(^0\d-\d{4}-\d{4}$)|(^0\d{2}-\d{3}-\d{4}$)|(^0\d{3}-\d{2}-\d{4}$)|(^0\d{4}-\d-\d{4}$)/);
"042-234-1234".match(tel);

// index: 入力文字列の何番目の文字列からマッチしたか（マッチするまでに何文字読み飛ばしたか）
// input: 正規表現と比較した入力値
// groups: 名前付きグループの場合、名前ごとのマッチ結果

// 市外局番: Area Code
// 市内局番: Message Area
// 加入者番号: Subscriber Number
const match = "01-2345-6789".match(/^(?<AC>0\d{1})-(?<MA>\d{4})-(?<SA>\d{4})$/);
// const { AC, MA, SA } = match.groups;

// JSONのパース
// aはany型
const a = JSON.parse(`{ "name": "John Cleese"}`);
// as で型情報を付与できる
const p = JSON.parse(`{"name": "Terry Gilliam"}`) as Person;

// SyntaxError 例外
let person: Person;
try {
    person = JSON.parse(input);
} catch (e: unknown){
    // fallback
    person = { name: "Eric Idle" };
}

const res = await fetch("/api/person");
// 本当は res.ok で通信が成功したかチェックが必要！
person = { name: "Michael Palin" };

// b は文字列
// stringify()の引数は2つ, 1:置換関数, 2:インデント
const b = JSON.stringify({person: "Graham Chapman"});

const c = new URL("https://caniuse.com/?search=url%20search%20params")
// URL {
// href: 'https://caniuse.com/?search=url%20search%20params',
// origin: 'https://caniuse.com',
// searchParams: URLSearchParams { 'search' => 'url search params' },
// }