// <Dateクラス>

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