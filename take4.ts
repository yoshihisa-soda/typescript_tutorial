// if文
if (task === "休憩中") {
    console.log("サーフィンに行く");
} else if (task == "デスマ中") {
    console.log("睡眠時間を確保する");
} else {
    console.log("出勤する");
}

// switch文
switch (task) {
    case "休憩中":
        console.log("サーフィンに行く");
        break;    
    case "デスマ中":
        console.log("睡眠時間を確保する");
        break;    
    default:
        console.log("出勤する");
}

// for文
for (let i = 0; i < 5; i++) {
    console.log(i);
}

const obj: string[] = ["gogo", "tanaka"];
for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
        console.log(key, obj[key]);
    }
}

for (const value of array) {
    console.log(value);
}

// array.entries() （配列のインデックスと値がセットで返ってくる）
// Object.keys(obj) （オブジェクトのキーが返ってくる）
// Object.values(obj) （オブジェクトの値が返ってくる）
// Object.entries(obj) （オブジェクトのキーと値が返ってくる）
// map.keys() （ Map のキーが返ってくる）
// map.values() （ Map の値が返ってくる）
// map.entries() （ Map のキーと値が返ってくる）

for (const [key, value] of Object.entries(obj)) {
    console.log(key, value);
}

// for await of このバージョンでは使えない？？
// for await (const body of Response.body) {
//     console.log(body);
// }

// try-catch文
try {
    // 処理
    throw new Error("例外を投げる");
} catch(e) {
    // ここに飛んでくる
    console.log(e);
} finally {
    // エラーがあってもなくてもここにくる
}

// 比較の演算子: === と == がある（それぞれ否定は !== と != ）
// 配列やオブジェクトで厳密な一致（ === ）は「インスタンスが同一かどうか」で判定
// 演算子 x ** y <-> Math.pow(x, y)と同じ累積計算
// 三項演算子
let day: string = "";
const result = (day === "日曜日") ? "明日は休みです" : "明日は出勤です";

// Reactの中の条件分岐
render() {
    return (
        <div>
        { this.state.loggedIn ? <p>ようこそ</p> : <p>ログインが必要です</p> }
        </div>
    );
}

// Reactの中のループ
render() {
    return (
        <ul>
        { this.state.users.map(user => {
            <li>{user.name}</li>
        }) }
        </ul>
    );
}

